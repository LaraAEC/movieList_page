import { useState } from 'react'; //importando o useState para armazenar os estados da nossa aplicação, dos nossos links

import { Container } from './styles';

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';

import { MovieItem } from '../../components/MovieItem'

import { ButtonTextBack } from '../../components/ButtonTextBack';

import { Button } from '../../components/Button';

import { api } from '../../services/api'; //importando minha api para cadastrar a nota no BD

import { useNavigate } from 'react-router-dom';

export function NewMovie() {
  const [ title, setTitle] = useState(""); //Criando um estado para o título do filme a ser cadastrada
  const [ description, setDescription] = useState(""); //Criando um estado para a descrição da nota a ser cadastrada

  const [ tags, setTags ] = useState([]); //Criando nosso estado que armazena as Tags digitados, ele começa como um array vazio.
  const [ newTag, setNewTag ] = useState(""); //Criando nosso estado que armazena a nova Tag, apenas um, o digitado da vez, inicializa como string vazia.

  const [ grade, setGrade] = useState(""); 

  const navigate = useNavigate();
  
  function handleBack() { //funcionalidade de voltar com o botão 'voltar'
    navigate(-1); //para ser usado no botão de voltar e colocar o usuário na rota anterior
  }

  function handleAddTag() { //funcionalidade que adiciona a nova Tag, digita pelo usuário, na lista de tags
    setTags(prevState => [...prevState, newTag]); //Setando meu array estado tags - mantenho o que tinha antes, mais a nova Tag, e com o spread operator tudo fica dentro de um único array, mesmo nível
    setNewTag("");//Após usar o estado newTag na linha superior, eu zero ele para receber depois outra Tag, sem acúmulo nesta linha.
  }

  function handleRemoveTag(deleted) { //funcionalidade para remover tag, recebe como parâmetro o tag que deseja remover
    setTags(prevState => prevState.filter(tag => tag !== deleted)); //filtrando na lista de tags atual (atual = prevState) a partir do tag que quero deletar, refazer a lista com todos os itens que são diferentes do tag que estou deletando
    //Tudo sendo feito dentro de setTags, pois ele já vai me devolver a nova lista
  }

  async function handleNewNote(){
    if (!title) { //se não houver título dar um return com esse alerta parando a função, precisa ter título.
      return alert("Precisa inserir um título. Por favor, informe o título do Filme.");
    }

    if (!grade) { //se não houver nota dar um return com esse alerta parando a função, precisa ter uma nota.
      return alert("Precisa inserir uma nota. Por favor, informe a nota do Filme.");
    }
    
    if (newTag) { //se houver newTag retornar esse alerta, e o próprio return pára a função, e ele será dao se cair no if, e cai no if se tiver algo nesse input de tag e só vai haver se não tiver clicado no mais, pois quando clica ele zera o input correspondente.
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
    }
    await api.post("/notes", { //fazendo um post na nossa api enviando para essa rota o objeto que quero mandar com todos itens que quero enviar para o BD 
      title,
      grade,
      description,
      tags,
    });

    alert('Filme cadastrado com sucesso!'); //em dando tudo certo dar alerta

      console.log(grade);

    navigate("/"); //levando o usuário para a barra ou barra home, tela home
  }
    
  return (
    <Container>
      <Header />

      <div className="Back">
        <FiArrowLeft/>
          <ButtonTextBack onClick={handleBack}
          title="Voltar"
          />
      </div>
     
      <main>
        <form>
          <h1>Novo Filme</h1>

          <div className="MovieGrade"> 
            <input className="Input"
            type="text"
            placeholder="Título" 
            onChange={e => setTitle(e.target.value)}
            />

            <input className="Input"
            type="number"
            placeholder="Sua nota(de 0 a 5)"
            onChange={e => setGrade(e.target.value)}
            />
          </div>

          <textarea
          placeholder= "Observações"
          onChange={e => setDescription(e.target.value)}
          >

          </textarea>

          <p>Marcadores</p>
          <div className="tags">
            {
              tags.map((tag, index) => (
                <MovieItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />  
              ))
            }
            
              <MovieItem
                isNew
                placeholder="Nova tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
          </div>

          <Button className="SaveMovie" title="Salvar filme"  onClick={handleNewNote} />
          
        </form>       
      </main>
    </Container>
  
  );
}
