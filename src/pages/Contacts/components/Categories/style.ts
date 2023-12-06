import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-radius: 16px;

  @media (min-width: 768px) {
    padding: 40px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #4e4e4e;
    padding-bottom: 10px;
    margin-bottom: 20px;

    h3 {
      color: #fff;
      font-weight: bold;
    }
  }

  .isLoading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .emptyList {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #4e4e4e;
      padding-bottom: 10px;
      margin-bottom: 20px;
      width: 100%;
    }

    p {
      width: 100%;
      max-width: 400px;
      text-align: center;
      color: #fff;
      margin-top: 20px;

      span {
        color: #6741d9;
      }
    }
  }

  .content {
    flex: 1;
    height: 100%;
    max-height: 60vh;
    overflow-y: auto;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #272727;
  border-radius: 24px;
  margin-top: 8px;

  small {
    padding: 4px;
    background: #e0e3ff;
    color: #5061fc;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 16px;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    button {
      background: none;
      outline: none;
      border: none;
    }
  }
`;
