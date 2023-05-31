
import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  border: none;
  font-size: 16px;
  height: 48px;
  padding: 0 12px;
  border-radius: 8px;
  font-weight: 500;

`;