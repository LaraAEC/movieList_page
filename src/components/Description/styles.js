import styled from 'styled-components';


export const Container = styled.button`
  
  width: 1121px;
  height: 290px;

  margin-right: 16px;
  padding: 32px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 10px;

  border: none;

  display: flex;
  flex-direction: column;
  gap: 15px;

  cursor:default;

  > textarea {
    
    background: transparent;

    width: 100%;
    height:100%;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    line-height:20px;
    font-size: 16px;
    weight: 400;

    text-align: justify;

    border: none;
    box-shadow: none;
    outline: none;

    resize: none;
    overflow-y: hidden;
    cursor: pointer;
  }

  > div {
    margin-top: 15px;
  }

  .visible {
    overflow: hidden;
    
}

  .not-visible {
    white-space: normal;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
} 

`;

export const MovieTitle = styled.div`
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    cursor: default;
`;

