import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  button {
    width: 100%;
    height: 48px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    font-weight: 600;
    letter-spacing: -0.5;
    border-radius: 16px;
  }
`;
