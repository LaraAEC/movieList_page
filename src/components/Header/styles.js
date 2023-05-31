import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header; 

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 123px;

  h2 {
      color: ${({ theme }) => theme.COLORS.SALMON};
    }
    margin-bottom:50px;
`;
// Notas sobre este arquivo:
// Estratégia de grid-area para deixar o cabeçalho fixo ao rolar a tela ele não sumir.
// A largura foi configurada para ocupar 100% do que estiver disponível na tela.
// Colocando a linha que existe em baixo no cabeçalho com border-bottom-width: 1px;
// Fazendo com que essa linha seja sólida com border-bottom-style: solid;
// Colocando a cor dessa linha/ borda inferior com o cifrão pois vai envolver variável e estamos em um literals template. Com o código que puxa uma cor do tema styles geral.
// Meu cabeçalho está como display: flex;
// Arrumei os elementos dentro do cabeçalho para ficarem na horizontal dispostos cada um em uma extremidade com  justify-content: space-between;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  

  > div {
    display: flex;
    gap: 0px;
    flex-direction: column;
    margin-left: 6px;
    line-height: 24px;
    text-align: end;
    align-items: center;

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
  }
  } 
`;

export const Logout = styled.button`
  border: none;
  background: none;

  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  cursor: pointer;
`;



 



