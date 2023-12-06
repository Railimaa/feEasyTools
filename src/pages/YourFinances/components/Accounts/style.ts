import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  background: #0a0a0a;
  color: #fff;

  @media (min-width: 768px) {
    padding: 40px;
  }

  #title {
    color: #fff;
    letter-spacing: 0.5px;
    font-weight: 400;
  }

  .saldoTotal {
    display: flex;
    align-items: center;
    gap: 8px;

    strong {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -1px;
      line-height: 32px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      outline: none;
      background: transparent;
    }
  }

  .myAcc {
    display: flex;
    justify-content: end;
    flex-direction: column;
    flex: 1;
    margin-top: 40px;

    @media (min-width: 768px) {
      margin-top: 0;
    }

    .titleAcc {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      strong {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: -1px;
      }
    }
  }

  .loading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .notAccounts {
    display: flex;
    justify-content: end;
    flex-direction: column;
    flex: 1;
    margin-top: 40px;

    @media (min-width: 768px) {
      margin-top: 0;
    }

    .ContainerButton {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      height: 204px;
      border-radius: 16px;
      border: 2px dashed #5f3dc4;
      margin-top: 16px;

      button {
        width: 44px;
        height: 44px;
        border-radius: 40px;
        border: 2px dashed #fff;
        outline: none;
        background: transparent;
      }

      span {
        display: block;
        text-align: center;
        width: 128px;
        letter-spacing: -0.5px;
        font-weight: 500;
        font-size: 16px;
        color: #fff;
      }
    }

    .titleNotAccounts {
      margin-bottom: 10px;

      strong {
        letter-spacing: -1px;
        color: #fff;
        font-size: 18px;
      }
    }
  }
`;
