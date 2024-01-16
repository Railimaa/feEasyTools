import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: #fff;
    outline: none;
    background: none;
    border: none;
  }

  span {
    font-weight: 800;
    font-size: 16px;
    letter-spacing: -0.5px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  }
`;
