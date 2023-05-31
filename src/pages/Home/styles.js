import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
   background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

   width: 100%; 
   height: 100vh;

   display: grid;
   grid-template-rows: 105px auto;
   grid-template-areas:
   "header"
   "content";
   
   overflow-y: hidden;

   > main {
      margin: 0 auto;

      padding: 100px;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      overflow-x: hidden;
      overflow-y: auto;

      ::-webkit-scrollbar-track {
         background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      }

      ::-webkit-scrollbar {
         background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
         width: 8px;    
      }

      ::-webkit-scrollbar-thumb {
         background: ${({ theme }) => theme.COLORS.SALMON};
         
         -webkit-border-radius: 10px;
         border-radius: 10px;
      }
   }
`;

export const Content = styled.div`
   grid-area: content;

   display: flex;
   flex-direction: column;
   gap: 24px;


   margin-bottom: 59px;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

   > #categories {
      display: flex;
      flex-direction: row;
      gap: 24px;
      
      flex-wrap: wrap;
   } 
`;

export const Start = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 700px;

   padding: 48px 123px 38px 123px;
   margin: 0 auto;

   background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const AddMovie = styled(Link)`
      display: flex;
      gap: 8px;

      width: 207px;
      height: 48px;

      text-align: center;
      align-items: center;
      justify-content: center;
      
      font-weight: 400;
      font-size: 16px;

      border-radius: 8px;

      background: ${({ theme }) => theme.COLORS.SALMON};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      
      text-decoration: none;
`;

export const Search = styled.input`
    height: 56px;
    width: 65%;

    padding: 12px;
    
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border: 0;

    border-radius: 10px;

    &:placeholder {
      color:  ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;