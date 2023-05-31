import { useState, useEffect } from 'react';

import { Container, Back } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { IoMdTime } from 'react-icons/io';

import { ButtonText } from '../../components/ButtonText';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';

import { Stars } from '../../components/Stars';

import { Tag } from '../../components/Tag';

import { useParams, useNavigate } from 'react-router-dom'; //importando o useParams para buscar os parâmetros que existem na rota

import { api } from '../../services/api';

const myDate = new Date().toLocaleDateString();
const myTime = new Date().toLocaleTimeString();

export function Details() {
  const [data, setData] = useState(null);
  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; //se o usuário tiver avatar usar a literals com a url que busca a imagem no backend, senão usar avatarPlaceholder
 

  const params = useParams(); //colocando meu usePrams em execução nessa constante
  const navigate = useNavigate();

  function handleBack() { //funcionalidade de voltar com o botão 'voltar'
    navigate(-1); //para ser usado no botão de voltar e colocar o usuário na rota anterior
  }

  async function handleRemove() { //funcionalidade de deletar notas
    const confirm = window.confirm("Deseja realmente remover este Filme?"); //Vai guardar um true or false

    if(confirm) { //se confirm for verdadeiro, faço a exclusão da nota
      await api.delete(`/notes/${params.id}`); //deleta a nota localizada através do parâmetro que está sendo passado na rota no endereçamento lá em cima
      navigate(-1); //levo o usuário de volta a raiz
    }
  }

  useEffect(() => { //buscando os dados da minha nota na minha api/backend/banco de dados
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`); //buscando no backend a minha nota usando a rota /notes e o parâmetro da minha nota
      setData(response.data); //configurando meu estado dados com a resposta do banco de dados sobre meu get na rota indicada acima
    } 

    fetchNote(); //chamando meu fetchNote, que declarei acima, para que ele seja executado
  }, []);

  return (
    <Container>
      
        <Header />
      
          <Back to="/">
            <FiArrowLeft />
            Voltar
          </Back>

          {
            data &&
              <main>
                  <div className='wrapper'>
                    <h1>
                      {data.title}
                    </h1>

                    <div id="stars">
                      {
                        data.grade &&
                        <Stars
                          value={data.grade}
                        />
                      }
                    </div>
                   
                  </div>
                  
                  <div className="user-date">
                    <div className="user-date-user">
                      <img
                        src={avatarUrl}
                        alt="Foto do usuário"     
                      />

                      <p>
                        Por {user.name}
                      </p>
                    </div>
                  
                    <div className="user-date-date">
                      <div className="icon">
                        <IoMdTime />
                      </div>

                      <p>
                        {myDate} às {myTime}
                      </p>

                    </div>
                  </div>
                  
                {
                  data.tags && 
                    <footer>
                      {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                      }
                    </footer>
                }

                <p className="synopsis">
                  {data.description}
                </p>

                <ButtonText
                className="DeleteMovie"
                title="Excluir filme"
                onClick={handleRemove}
                />

              </main>
          } 
      
    </Container>
  );
}