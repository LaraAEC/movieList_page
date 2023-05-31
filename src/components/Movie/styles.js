import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh; 

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > section {
    width: 100%;
    height: 100vh;
    padding: 24px;

    .wrapper {
      display: flex;
      gap: 5px;

      align-items: center;

      margin-bottom: 24px;

      > h1 a {
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        cursor: pointer;
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
    
    .user-date {
      display: flex;
      gap: 20px;

      color: ${({ theme }) => theme.COLORS.WHITE_100};

      align-items: center;

      margin-bottom: 40px;
    }

    .user-date .user-date-user {
      align-items: center;

      > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      display: flex;
      gap: 5px;
    }

    .user-date .user-date-date {
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
}
 `;