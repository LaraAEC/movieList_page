import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { FiPlus } from 'react-icons/fi';

import { ButtonText } from '../../components/ButtonText';

import { Container, Content, Start, AddMovie, Search } from './styles'; 
// Importando meu Container, criei no styles.js desta pasta, uma constante que guarda um elemento HTML: div.
// Ele (esse Container) que vai englobar toda a estrutura dessa minha página, e, estou importando aqui.

import { Header } from '../../components/Header';

import { Description } from '../../components/Description';

export function Home() { //minha função precisa ter somente um return. Tudo está dentro dele, envolto no Container que tem meu CSS.
  
  const [tags, setTags] = useState([]); //criando estado que recebe as tags digitadas pelo usuário
  const [tagsSelected, setTagsSelected] = useState([]); //criando o estado das tags selecionadas pelo usuário
  const [search, setSearch] = useState(""); //criando meu estado que recebe o conteúdo digitado no input de pesquisa
  const [notes, setNotes] = useState([]); //criando meu estado das notas e será um array

  const params = useParams(); //colocando meu usePrams em execução nessa constante
  const navigate = useNavigate();

  function handleTagSelected(tagName) { //função que lida com a tag selecionada e recebe como parâmetro o nome da tag selecionada
    if(tagName ==="all") {
      return setTagsSelected([]); //se eu clicar em 'todos' desmarca todas as outras tags de uma vez
    }
    
    const alreadySelected = tagsSelected.includes(tagName); //verificando se a tag selecionada existe dentro do array de tags
    
    if(alreadySelected) { //se já está selecionado, e foi clicado, então tira da lista de tags
      const filteredTags = tagsSelected.filter(tag => tag !== tagName); //faz um filter e devolve uma lista com todas as tags diferentes da tagName
      setTagsSelected(filteredTags); //colocando as tags já filtradas no array de tagsSelected

    } else {
      setTagsSelected(prevState => [...prevState, tagName]); //se não está selecionado, e foi clicado, então seleciona
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`); //levando o usuário para a tela de details e mandando um parâmetro na rota
  }

  useEffect(() => { //buscando a tag, só uma vez quando a página é carregada, por isso não coloquei nenhum estado entre os colchetes abaixo
    async function fetchTags() {
      const response = await api.get("/tags"); //acessando minha api e pegando minhas tags com o 'get' da rota '/tags' de dentro da minha api
      setTags(response.data); //pegando os dados da minha response obtida acima e colocando como parâmetro já dentro do setTags, configurando-o com minhas tgs atuais contidas no BD
    }

    fetchTags();
  },[]);

  useEffect(() => { //a dependência desse useEffect serão as tagsSelected e o search, quando mudar o conteúdo desses estados ele executa o useEffect novamente
    async function fetchNotes(){ //buscando a nota usando como filtro os dois estados do colchetes
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`); //buscando no backend na rota '/notes', e enviando através de uma query o nome do title passando o conteúdo do search e as tags com o conteúdo das tags selecionadas
      setNotes(response.data); //passando os dados da resposta do backend sobre a nota buscada para o setNotes
    }

    fetchNotes(); //executando a função acima declarada, foi declarada neste escopo pois só aqui será usada

  }, [tagsSelected, search]);

  return (
    <Container>
      <Header />
    
      <Start>
        <h2>Meus filmes</h2>
        <AddMovie to="/newmovie">
          <FiPlus />
          Adicionar Filme
        </AddMovie>
      </Start>

      <main>
        <Content>
          <div id="categories">
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0} /*verificando se há tags selecionadas, se não houver ativar o isActive orange*/ 
            />
          
          {
            tags && tags.map(tag => (
                <ButtonText
                  key={String(tag.id)}
                  title={tag.name}
                  onClick={() => handleTagSelected(tag.name)}
                  isActive={tagsSelected.includes(tag.name)} /*verificando se tag.name existe dentro do array tagsSelected, se existe quer dizer que ela está selecionada, isActive orange*/ 
                se /> 
            ))
          }
          
          </div>

          <Search
            placeholder="Pesquisar pelo título"
            onChange={(e) => setSearch(e.target.value)}
          />

            {
              notes.map(note => (
                <Description
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                  title={note.title}
                  value={note.description}
                  integer={note.id}
                  type="text"
                  visibility="visible"
                />  
              ))
            }
              
        </Content>  
      </main>
    </Container>
  )
}
