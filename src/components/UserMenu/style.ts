import styled from 'styled-components';

export const Container = styled.div`
  button {
    border: none;
    outline: none;
    background: none;
  }

  .noImage {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    width: 48px;
    height: 48px;
    border-radius: 999px;
    background: #5f3dc4;
  }

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 48px;
    height: 48px;
    border-radius: 999px;
    object-fit: cover;
  }

  span {
    color: #fff;
  }
`;
