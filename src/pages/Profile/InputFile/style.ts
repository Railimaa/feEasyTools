import styled from 'styled-components';

export const Container = styled.div`
  label {
    color: #fff;
    cursor: pointer;
  }
`;

export const InputC = styled.input`
  width: 100%;
  height: 52px;
  padding: 16px;
  border: 2px solid #9775fa;
  border-radius: 8px;
  background: #f3f0ff;
  color: #272727;
  font-weight: bold;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    background: rgba(275, 275, 275, 0.9);
  }
`;
