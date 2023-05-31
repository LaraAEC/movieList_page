import styled from 'styled-components';


export const FiveStars = styled.div`
  height: 40px;
  width: 10%;

  background: transparent;

  cursor: default;

  > .grade {
    display: flex;
    gap: 10px;

    > p svg {
      color: ${({ theme }) => theme.COLORS.SALMON};
    }
  }
 `;

export const FourStars = styled.div`
  height: 30px;
  width: 10%;

  background: transparent;

  cursor: default;
  

  > .grade {
    display: flex;
    gap:10px;

    > p svg {
      color: ${({ theme }) => theme.COLORS.SALMON};
    }
  }
`;

export const ThreeStars = styled.div`
  height: 40px;
  width: 10%;

  background: transparent;

  cursor: default;

  > .grade {
    display: flex;
    gap: 10px;

    > p svg {
      color: ${({ theme }) => theme.COLORS.SALMON};
    }  
  }
`;

export const TwoStars = styled.div`
  height: 40px;
  width: 10%;

  background: transparent;

  cursor: default;

  > .grade {
    display: flex;
    gap: 10px;

    > p svg {
      color: ${({ theme }) => theme.COLORS.SALMON};
    }
  }
`;

export const OneStars = styled.div`
  height: 40px;
  width: 10%;

  background: transparent;

  cursor: default;

  > .grade {
    display: flex;
    gap: 10px;

    > p svg {
      color: ${({ theme }) => theme.COLORS.SALMON};
    }
  }
`;