
import styled from 'styled-components';

export const Container = styled.button`
 
    display: flex;
    gap: 2px;

    text-align: center;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.SALMON};
    
    text-decoration: none;

    background: transparent;
    border: none;

`;