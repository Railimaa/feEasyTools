import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
  background: ${({ theme }) => (theme === 'dark' ? '#272727' : '#FFFFFF')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  margin-top: 8px;
  height: 100px;
  width: 100%;
  cursor: pointer;

  span {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    font-weight: 700;
    letter-spacing: -0.5px;
    font-size: 16px;
  }
`;
