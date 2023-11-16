/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .showPassword {
    width: 100%;
    max-width: 40px;
    position: absolute;
    top: 35px;
    right: 22px;
    transform: translateY(50%);
    transform: translateX(50%);
    background: transparent;
    border: none;
    outline: none;
  }
`;

export const Label = styled.label`
  color: #495057;
  position: absolute;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 22px;
  left: 10px;
  font-size: 12px;
  transition: all 0.2s ease-in-out;
`;

export const InputC = styled.input`
  width: 100%;
  height: 52px;
  border: 2px solid ${({ color }) => (color ? '#C92A2A' : '#9775fa')};
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
  outline: none;
  color: #272727;
  font-weight: bold;
  background: #f3f0ff;
  margin-top: 20px;

  &:focus {
    border-color: ${({ color }) => (color ? '#C92A2A' : '#5f3dc4')};
    box-shadow: ${({ color }) =>
      color
        ? 'none'
        : 'rgba(103, 65, 217, 0.09) 0px 2px 1px, ' +
          'rgba(103, 65, 217, 0.09) 0px 4px 2px, ' +
          'rgba(103, 65, 217, 0.09) 0px 8px 4px, ' +
          'rgba(103, 65, 217, 0.09) 0px 16px 8px, ' +
          'rgba(103, 65, 217, 0.09) 0px 32px 16px'};
  }
  transition: ${({ color }) => (color ? 'all ease-in-out 0.2s' : 'none')};
`;
