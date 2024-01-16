import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: ${({ theme }) => (theme === 'dark' ? '#272727' : '#FFFFFF')};
  border-radius: 16px;
  margin-top: 8px;
  width: 100%;
  max-width: 400px;
  cursor: pointer;

  span {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    font-weight: 700;
    letter-spacing: -0.5px;
    font-size: 16px;
  }
`;
