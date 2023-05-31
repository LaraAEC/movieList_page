import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.SALMON};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 48px;
  border: 0;
  padding: 0 32px;
  border-radius: 8px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;