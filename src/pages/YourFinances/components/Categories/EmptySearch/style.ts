import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 60px;

  p {
    width: 100%;
    max-width: 200px;
    word-wrap: break-word;
    opacity: 2px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (min-width: 768px) {
      max-width: 400px;
    }
  }
`;
