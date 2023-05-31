import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { Container, Profile, Logout } from './styles';

import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { api } from '../../services/api'; //importando minha api, meu servidor


export function Header() {
  const { signOut, user } = useAuth(); //desestruturando a função de logout, e, o usuário, de dentro do meu contexto
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; //se o usuário tiver avatar usar a literals com a url que busca a imagem no backend, senão usar avatarPlaceholder
 

  const navigation = useNavigate();
  const params = useParams(); //colocando meu usePrams em execução nessa constante
  
  function handleSignOut() { //função disparada com interação do usuário
    navigation("/"); //levando o usuário para a tela inicial
    signOut(); //des-logar o usuário
  }


  return (
    <Container>

      <div id="logout">
          <h2>MovieList</h2>

          <Profile to="/profile">
            <div>
              <img
              src={avatarUrl}
              alt="Foto do usuário"     
              />
              <strong>{user.name}</strong>
            </div>
          </Profile>
        </div>
      
        <Logout onClick={handleSignOut}>
          Sair
        </Logout>
      
    
    </Container>
  );
}