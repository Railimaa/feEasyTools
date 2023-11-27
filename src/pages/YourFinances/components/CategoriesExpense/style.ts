import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 50vh;
  overflow-y: auto;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-radius: 16px;
  background: #343a40;

  @media (min-width: 768px) {
    padding: 40px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    p {
      color: #fff;
      font-size: 16px;
      letter-spacing: -0.5px;
      font-weight: bold;
    }
  }

  .isLoading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .notCategories {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 40px;

    span {
      color: #fff;
      letter-spacing: -0.5px;
      font-weight: bold;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
`;

export const CardCategorie = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 16px;
  background: #e5dbff;
  margin-top: 18px;

  .iconAndName {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
      color: #343a40;
      font-weight: 700;
      font-size: 16px;
      letter-spacing: -0.5px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    button {
      border: none;
      outline: none;
      background: none;
    }
  }
`;