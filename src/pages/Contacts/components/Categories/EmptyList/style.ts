import styled from 'styled-components';

export const Container = styled.div`
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
`;
