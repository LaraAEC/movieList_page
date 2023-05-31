import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  
  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  overflow-y: scroll;

  ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

  ::-webkit-scrollbar {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      width: 8px;     
  }

  ::-webkit-scrollbar-thumb {
      background: transparent;
      
      -webkit-border-radius: 10px;
      border-radius: 10px;

      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
  } 

    > main {
      height: 65%;

      margin: 50px 123px;
      padding-right: 20px;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      text-align: justify;

      overflow-y: scroll;

      word-wrap: break-word; 
      
      ::-webkit-scrollbar-track {
          background-color: transparent;
      }

      ::-webkit-scrollbar {
          background: transparent;
          width: 8px;      
      }

      ::-webkit-scrollbar-thumb {
          background: ${({ theme }) => theme.COLORS.SALMON};
          
          -webkit-border-radius: 20px;
          border-radius: 20px;

          height:10px;   
      } 

      > .wrapper {
        display: flex;
        gap: 50px;

        align-items: center;
        text-align: center;

        margin-bottom: 24px;

        > h1 {
            color: ${({ theme }) => theme.COLORS.WHITE_100};   
        }

        > #stars {
          margin-top: 20px;
          

        
        }
    }

    > footer {
      width: 100%;
      display: flex;
      margin-bottom: 40px;
      
      > span {
        background: ${({ theme }) => theme.COLORS.SMOKE_100};
        color: ${({ theme }) => theme.COLORS.GRAY_400};
      }
    }
    
    > .user-date {
      display: flex;
      gap: 20px;

      color: ${({ theme }) => theme.COLORS.WHITE_100};

      align-items: center;

      margin-bottom: 40px;
    }

    > .user-date .user-date-user {
      align-items: center;

      > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      display: flex;
      gap: 5px;
    }

    > .user-date .user-date-date {
      text-align: center;
      align-items: center;

      > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      display: flex;
      gap: 5px;
    }
  
    .icon svg {
      color: ${({ theme }) => theme.COLORS.SALMON};
    }

    .synopsis {
      width: 100%;
      
      border: none;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      
      resize: none;
    }

    .DeleteMovie {
      margin-top: 20px;
      
      width: 18%;

      background: ${({ theme }) => theme.COLORS.BLACK};
      color:  ${({ theme }) => theme.COLORS.SALMON};
    }

    > .DeleteMovie:hover {
        background: ${({ theme }) => theme.COLORS.SALMON};
        color:  ${({ theme }) => theme.COLORS.BLACK};
      }
       
  }
 `;

export const Back = styled(Link)`
    width: 100px;
    height: 50px;

    margin-left: 145px;
    margin-top: 24px;
    padding: 0;

    text-align: center;
    align-items: center;
    justify-content: center;
   
    background: transparent;
    text-decoration: none;
  
    color: ${({ theme }) => theme.COLORS.SALMON};
    
    text-decoration: none;
`;
 