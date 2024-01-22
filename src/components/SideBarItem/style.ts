import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100vh;
  max-height: 80vh;
  overflow-y: auto;
  padding: 20px;
  margin-top: 80px;

  .userOptions {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 10px;
    padding: 12px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 20px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    text-decoration: none;
    outline: none;
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
      background: transparent;
      border-radius: 8px;
      box-shadow: 0px 22px 70px 4px #5f3dc4;
    }

    &.active {
      color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
      background: transparent;
      border-radius: 8px;
      box-shadow: 0px 10px 30px 2px #5f3dc4;
      border-bottom: 2px solid #5f3dc4;
    }
  }
`;
