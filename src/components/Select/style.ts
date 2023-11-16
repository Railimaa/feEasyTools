import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .label {
    position: absolute;
    left: 10px;
    top: 22px;
    font-size: 12px;
    color: #495057;
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const SelectC = styled.select<{ style?: string }>`
  width: 100%;
  height: 52px;
  border: 2px solid ${({ color }) => (color ? '#C92A2A' : '#9775fa')};
  border-radius: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 20px;
  outline: none;
  background: #f3f0ff;
  margin-top: 20px;
  color: #272727;
  font-weight: bold;

  &:focus {
    border-color: ${({ color }) => (color ? '#C92A2A' : '#5f3dc4')};
    box-shadow:
      rgba(103, 65, 217, 0.09) 0px 2px 1px,
      rgba(103, 65, 217, 0.09) 0px 4px 2px,
      rgba(103, 65, 217, 0.09) 0px 8px 4px,
      rgba(103, 65, 217, 0.09) 0px 16px 8px,
      rgba(103, 65, 217, 0.09) 0px 32px 16px;
  }

  option {
    color: #272727;
    font-weight: bold;
  }
`;
