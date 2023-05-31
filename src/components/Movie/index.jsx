import { IoMdTime } from 'react-icons/io';
import { Container } from './styles';

import { Stars } from '../Stars';
import { Tag } from '../Tag';

const myDate = new Date().toLocaleDateString();
const myTime = new Date().toLocaleTimeString();

export function Movie({title, value, description,  data, ...rest}){
 
  return (
    <Container {...rest}>
          <section>
            <div className='wrapper'>
              <h1><a>{ data.title }</a></h1>

              {
                data.grade &&
                <Stars
                  value={data.grade}
                />
              } 

            </div>

            <div className="user-date">
              <div className="user-date-user">
                <img
                  src="https://github.com/LaraAEC.png"
                  alt="Foto do usuário"     
                />

                <p>
                  Por Larissa Adler
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
              {data.value}
            </p>
            
          </section>
    </Container>
  );
}