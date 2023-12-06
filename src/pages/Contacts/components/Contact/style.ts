import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-radius: 16px;
  background: #0a0a0a;

  @media (min-width: 768px) {
    padding: 40px;
  }

  .inputSearch {
    position: relative;
    display: flex;
    align-items: center;

    .icon {
      position: absolute;
      display: flex;
      align-items: center;
      top: 18px;
      left: 24px;
    }
  }

  .isLoading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  max-width: 500px;
  height: 52px;
  background: #ffffff;
  border-radius: 25px;
  padding-left: 48px;
  padding-right: 48px;
  border: none;
  outline: none;

  &::placeholder {
    color: #999999;
    font-weight: 400;
    font-size: 16px;
    line-height: 20.16px;
  }

  &:focus {
    border: 2px solid #6741d9;
    transition: all ease-in-out;
  }
`;
