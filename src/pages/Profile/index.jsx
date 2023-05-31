import { useState } from 'react';

import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth'; //importando meu contexto useAuth para já setar nome e email com dados do usuário

import { api } from '../../services/api'; //importando minha api, meu servidor
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'; //importando (nome definido agora) a imagem de placeholder do avatar

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonTextBack } from '../../components/ButtonTextBack';

import { Container, Form, Avatar} from "./styles";

export function Profile() {

  const { user, updateProfile } = useAuth(); //pinçando meu user(com name e email), com as informações do usuário, e, minha function updateProfile(), do meu contexto

  const [name, setName] = useState(user.name); //setando o nome atual através do estado user compartilhado pelo meu contexto
  const [email, setEmail] = useState(user.email); //setando o email atual através do estado user compartilhado pelo meu contexto
  const [passwordOld, setPasswordOld] = useState(); //criando o estado do senha velha ou atual
  const [passwordNew, setPasswordNew] = useState(); //criando o estado da senha nova/a que se deseja na troca

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; //se o usuário tiver avatar usar a literals com a url que busca a imagem no backend, senão usar avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl); //criando o estado do avatar, setando como avatar já existente. Exibe o avatar de fato.
  const [avatarFile, setAvatarFile] = useState(null); ////criando o estado do arquivo selecionado, setando como nulo para receber avatar selecionado. Guarda o arquivo selecionado.

  const navigate = useNavigate();
  
  function handleBack() { //funcionalidade de voltar com o botão 'voltar'
    navigate(-1); //para ser usado no botão de voltar e colocar o usuário na rota anterior
  }

  async function handleUpdate() { //função para lidar com o updateProfile() que estou pinçando do meu contexto
    const user = { //criando meu objeto com as informações que desejo atualizar, esse é o parâmetro que vou mandar em updateProfile
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }
    await updateProfile({ user, avatarFile }); //passando o objeto criado user com as informações, passando o avatar atualizado, tudo para a função de atualização e a executando-a
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]; //colocando dentro dessa constante o arquivo que foi selecionado pelo usuário, extraindo ele do evento que foi capturado pelo onChange
    setAvatarFile(file); //colocando dentro da função setAvatarFile o arquivo que o usuário acabou de selecionar no input(câmera) de Avatar.

    const imagePreview = URL.createObjectURL(file); //gerando-criando uma URL a partir do arquivo que foi selecionado
    setAvatar(imagePreview); //colocando essa URL gerada dentro do setAvatar, para alterar o estado avatar, que vai exibir essa URL


  }

  return (
    <Container>
      <header>
        <div className="Back">
          <FiArrowLeft/>
            <ButtonTextBack onClick={handleBack}
            title="Voltar"
            />
        </div>
      </header>

      <Form>
        <Avatar>
          <img
          src={avatar}
          alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            /> 
          </label>

        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)} //atualizando o estado
        />

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)} //atualizando o estado
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)} //atualizando o estado
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)} //atualizando o estado
        />

        <div className="Button">
          <Button title="Salvar" onClick={handleUpdate} />
        </div>

      </Form>

    </Container>
  )
}