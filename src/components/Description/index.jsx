import { useState, useEffect } from 'react';
import { api } from '../../services/api';


import { Container, MovieTitle } from './styles';
import { Stars } from '../Stars';
import { Tag } from '../Tag';


export function Description({ title, value, data, visibility, readyOnly, ...rest }) {

  const [tagsSelected, setTagsSelected] = useState([]); //criando o estado das tags selecionadas pelo usuário
  const [search, setSearch] = useState(""); //criando meu estado que recebe o conteúdo digitado no input de pesquisa
  const [notes, setNotes] = useState([]); //criando meu estado das notas e será um array
  

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

  useEffect(() => { //a dependência desse useEffect serão as tagsSelected e o search, quando mudar o conteúdo desses estados ele executa o useEffect novamente
    async function fetchNotes(){ //buscando a nota usando como filtro os dois estados do colchetes
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`); //buscando no backend na rota '/notes', e enviando através de uma query o nome do title passando o conteúdo do search e as tags com o conteúdo das tags selecionadas
      setNotes(response.data); //passando os dados da resposta do backend sobre a nota buscada para o setNotes
    }

    fetchNotes(); //executando a função acima declarada, foi declarada neste escopo pois só aqui será usada

  }, [tagsSelected, search]);

  return (
    <Container>
     
      <h3><MovieTitle>{title}</MovieTitle></h3>

      {
        data.grade &&
        <Stars
          value={data.grade}
        />
      }

      <textarea readyOnly={true} className= { visibility } value={value} {...rest}/>

      {
      data.tags && 
      <footer>
        {
          data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
        }
      </footer>
      }
    </Container>
  );
}