import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    outline: none;
    border: none;

    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
      border-radius: 999px;
    }
  }

  .noImage {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 300px;
    height: 300px;
    border-radius: 999px;
    background: #5f3dc4;

    span {
      font-size: 80px;
      color: #fff;
    }
  }
`;
