import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 20px;
  }
`;

export const InputSearchC = styled.input`
  width: 100%;
  max-width: 500px;
  height: 52px;
  border-radius: 25px;
  outline: none;
  background: #0000;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 40px;
  padding-right: 40px;
  color: #fff;

  &::placeholder {
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 20.16px;
  }

  &:focus {
    border: 1px solid #6741d9;
    transition: all 0.1s ease-in-out;
  }
`;
