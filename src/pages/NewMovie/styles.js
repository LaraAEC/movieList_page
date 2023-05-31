import styled from 'styled-components';


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

    > .Back {
      width: 100px;
      height: 50px;

      margin-left: 120px;
      margin-top: 24px;
      padding: 0;

      display: flex;
      gap: 2px;

      text-align: center;
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme.COLORS.SALMON};
      
      text-decoration: none;

}

    > main {
      height: 65%;

      margin: 0px 123px;
      padding-right: 20px;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      text-align: justify;

      overflow-y: scroll;
      
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

      > form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        
      }

      > form .MovieGrade {
        display: flex;
        gap: 40px;

        > input {
          border: none;
          border-radius: 10px;

          background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

          width: 100%;
          padding: 18px;
        }
      }

      > form textarea {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        width: 100%;
        height: 270px;

        padding: 20px;

        color: ${({ theme }) => theme.COLORS.GRAY_200};
        line-height:20px;
        font-size: 16px;
        weight: 400;

        text-align: justify;

        border: none;
        border-radius: 10px;
        box-shadow: none;
        outline: none;

        resize: none;
      }

      > form .Input {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        
      }

      > form  .tags {
        display: flex;
        gap: 24px;

        flex-wrap: wrap;

        padding: 16px;

        background: ${({ theme }) => theme.COLORS.BLACK};

        border-radius: 8px;

      }

     
      >  form .SaveMovie {
        width: 50%;
        margin: auto;

        background: ${({ theme }) => theme.COLORS.BLACK};
        color:  ${({ theme }) => theme.COLORS.SALMON};
      }

      > form .SaveMovie:hover {
        background: ${({ theme }) => theme.COLORS.SALMON};
        color:  ${({ theme }) => theme.COLORS.BLACK};
      }
    }
 `;


  
  



 