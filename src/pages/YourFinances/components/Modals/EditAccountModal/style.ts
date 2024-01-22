import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form<{ theme: 'dark' | 'light' }>`
  #saldoInicial {
    font-size: 12px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    letter-spacing: -0.5px;
    font-weight: bold;
  }

  .valueAccount {
    display: flex;
    align-items: center;
    gap: 8px;

    #RS {
      font-size: 18px;
      color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
      letter-spacing: -0.5px;
    }
  }

  .inputs {
    margin-top: 10px;
  }

  button {
    margin-top: 28px;
    width: 100%;
  }
`;
