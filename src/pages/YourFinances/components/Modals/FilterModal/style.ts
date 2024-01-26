import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    font-size: 18px;
    font-weight: 700;
    line-height: 23.4px;
    letter-spacing: -1px;
  }

  .accounts {
    margin-bottom: 24px;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      text-align: left;
      padding: 12px;
      border-radius: 8px;
      border: none;
      background: none;
      outline: none;
      color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
      transition: 0.1s ease;

      &:hover {
        background: ${({ theme }) =>
          theme === 'dark' ? '#383838' : 'rgba(0, 0, 0, 0.1)'};
      }
    }
  }

  .year {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .action {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 200px;

      button {
        border: none;
        width: 48px;
        height: 48px;
        background: none;
        outline: none;
      }

      small {
        font-size: 14px;
        color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
      }
    }
  }

  .btn-active {
    background: ${({ theme }) =>
      theme === 'dark' ? '#525252' : 'rgba(0, 0, 0, 0.3)'} !important;
  }

  button {
    width: 100%;
  }
`;
