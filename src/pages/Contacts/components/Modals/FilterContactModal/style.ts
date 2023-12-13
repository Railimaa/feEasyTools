import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  span {
    text-align: center;
    color: #fff;
  }

  .submit {
    width: 100%;
    button {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  max-height: 30vh;
  overflow-y: auto;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 8px;
    padding: 8px;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 12px;

    &:hover {
      background: #525252;
      transition: all 0.1s ease-in-out;
    }
  }

  .btn-active {
    background: #6d6d6d !important;
    transition: all 0.1s ease-in-out;
  }
`;
