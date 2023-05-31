//HOOK para compartilhar os dados do usuário com minha aplicação. Contexto criado que envolve todas asa rotas, e, tem um estado chamado user que contém as informações do usuário.

import { createContext, useContext, useState, useEffect } from "react"; //importando o que é necessário para criar e usar contexto e estado


import { api } from '../services/api'; //importando minha api backend

export const AuthContext = createContext({}); //meu contexto criado. Preciso colocar export?

//Função que coloca com o Provider dados em meu contexto, e que já engloba o que estará dentro dele: as rotas todas Routes.
function AuthProvider({ children }){//recebendo o componente filho (Routes - veja no main.jsx)
  const [data, setData] = useState({}); //criando um estado chamado de dados, de data, como um objeto vazio inicialmente, ele irá armazenar meu user e meu token

  async function signIn({ email, password }) { //função de verificação de autenticação dos dados email e password
    try {
      const response = await api.post("/sessions", { email, password }); //enviando os dados para o BD e guardando sua resposta nesta constante
      const { user, token } = response.data; //desestruturando de dentro da response os dois dados que me interessam

      localStorage.setItem("@api_movieList:user", JSON.stringify(user)); // definindo um novo conteúdo dentro do meu local storage, passando o nome da chave e seu valor, e já transforamndo com o stringfy o user de objeto para texto para poder ser lido e guardado no LocalStorage do navegador
      localStorage.setItem("@api_movieList:token", token);// definindo um novo conteúdo dentro do meu local storage, passando o nome da chave e seu valor. Como o token já é texto  não preciso fazer nenhum parse.


      api.defaults.headers.common['Authorization'] = `Bearer ${token}`; //inserindo um token do tipo Bearer, de autorização, no cabeçalho, por padrão de todas as requisições que o usuário fizer a partir de agora.
      
      setData({ user, token }); //configurando, atualizando, alterando meu estado data para os valores de user e token acima desestruturados


    } catch (error) {
      if(error.response) { //se houver erro na resposta do backend
        alert(error.response.data.message); // dar alerta do erro que vem descrito no backend, que foi descrito pelo desenvolvedor
      } else{ //se não houver mensagem do desenvolvedor backend para esse erro, etão dar uma mensagem genérica assim
          alert("Não foi possível entrar."); //
      }
    } 
  }

  function signOut() { //função de fazer logout da page Home, da minha Aplicação
    localStorage.removeItem("@api_movieList:token"); //removendo do Local storage o token
    localStorage.removeItem("@api_movieList:user"); //removendo do Local storage o usuário

    setData({}); //deixando o estado data vazio para poder sair das app routes, fazer logout
  }

  async function updateProfile({ user, avatarFile }){ //função que atualiza os dados do usuário, recebe esse parâmetro
    try {

      if(avatarFile) { //se existir um arquivo de foto selecionado fazer...seu envio para o backend
        const fileUploadForm = new FormData(); //criando um form data para enviar arquivo para o backend, precisa ser enviado assim.
        fileUploadForm.append("avatar", avatarFile); //inserindo nesse Formulário um campo avatar com o valor do avatarFile(arquivo da foto).
        
        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar; //atualizando meu avatar colocando ele para receber a resposta do backend
      }

      await api.put("/users", user); //atualizando nessa rota esses dados do usuário recebidos por essa função, atualizando meu BD
      localStorage.setItem("@api_movieList:user", JSON.stringify(user)); // atualizando esses dados no local storage, usando a mesma chave para atualizar seu valor

      setData({ user, token: data.token});
      alert("Perfil atualizado com sucesso.");

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else{
          alert("Não foi possível atualizar o perfil.");
      }
    }  
  }

  //Lógica para o estado pegar os dados do user que ficaram no LocalStorage, mesmo havendo reload na page (pois no reload os estados somem, se este data sumir eu sou redirecionado para auth routes, não quero isso)
  useEffect(() => { //buscando as informações do local storage no navegador para permanecer após reload
    const token = localStorage.getItem("@api_movieList:token"); //buscando no Local Storage o token através de sua chave
    const user = localStorage.getItem("@api_movieList:user"); //buscando no Local Storage o user através de sua chave

    if(token && user) { //fazendo um if para garantir que tanto o token como o user foram informados
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`; //repete a execução da linha que coloca o token no cabeçalho
      
      setData({ //colocando dentro do meu estado data meu token e meu user, sendo este transformado de volta de string para objeto
        token,
        user: JSON.parse(user) //voltando os dados do usuário que estavam armazenados no tipo texto para o tipo objeto
      });
    }
  }, []);

  
  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      user: data.user
      }}
    > 
      {children} 
    </AuthContext.Provider>
  )
}

function useAuth() { //função que seleciona o contexto e o inicializa através do useContext já importado
  const context = useContext(AuthContext); //inicializando meu contexto e identificando qual contexto será usado
 
  return context; //retorno meu contexto selecionado já inicializado
}

export { AuthProvider, useAuth }; //exportando minha function

//Esse { children }, é o componente filho de algo sempre, no caso é o filho do nosso AuthProvider, ou seja, todas as rotas da nossa aplicação, veja no main.jsx quem é o componente filho do AuthProvider.

/*Poderia por as exportações em cada constante e em cada função, mas foi escolhido colocar apenas
no final entre chaves. Para facilitar a visualização do que estou exportando para usar em outro arquivo*/