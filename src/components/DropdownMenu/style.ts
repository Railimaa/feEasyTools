import styled from 'styled-components';

export const ContainerContent = styled.div`
  padding: 8px;
  background: #f3f0ff;
  border-radius: 16px;
  margin-top: 8px;
`;

export const ContainerItem = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  min-height: 40px;
  cursor: pointer;
  color: #6741d9;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    color: ${({ color }) => color || 'none'};
    font-weight: bold;
    background: #845ef7;
    border-radius: 16px;
    transition: all ease-in-out 0.1s;
  }
`;
