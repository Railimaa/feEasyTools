import styled from 'styled-components';

export const Container = styled.div`
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
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  max-height: 30vh;
  overflow-y: auto;
  margin-top: 20px;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    text-align: left;
    padding: 12px;
    border-radius: 8px;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #383838;
    }
  }

  .btn-active {
    background: #525252 !important;
  }
`;
