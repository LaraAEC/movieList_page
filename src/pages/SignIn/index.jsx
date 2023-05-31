import { useState } from 'react'; //importo para criar estados para armazenar as informações dos inputs

import { FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';


import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from "./styles";


export function SignIn() {

  //estruturando, criando estados, capturando os dados do input
  const [email, setEmail] = useState(""); //nome do estado, função que o modifica e valor do estado inicial.
  const [password, setPassword] = useState("");  //nome do estado, função que o modifica e valor do estado inicial.

  const { signIn } = useAuth(); //hook criado para inicializar e selecionar contexto que é o AuthContext - Retirando dele a função que foi passada no Provider
  
  function handleSignIn() { //função acionada com o onClick que está no button Entrar lá em baixo.
    signIn({ email, password }); //chamando a function signIn e passando seus parâmetros que são os estados sempre atualizados pelo setEstado através do onChange que está nos inputs
  }

  return (
    <Container>
      <Form>
        <h1>Movies List</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)} // capturando a mudança no 'e' e colocando o valor dela no método que configura estado como parâmetro e executando ele
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <div className="Button">
          <Button title="Entrar" onClick={handleSignIn} />
        </div>
      
        <Link to="/register">
          Criar Conta
        </Link> 
      </Form>
      <Background />  
    </Container>
  );
}