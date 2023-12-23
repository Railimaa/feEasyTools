/* eslint-disable @typescript-eslint/ban-ts-comment */
import { keyframes, styled } from 'styled-components';

const slideUpAndFade = keyframes`
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
`;

export const ContainerContent = styled.div`
  animation: ${slideUpAndFade} 0.3s;
  padding: 8px;
  background: #272727;
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
  color: #fff;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    color: '#fff';
    font-weight: bold;
    background: ${({ color }) => color || '#4e4e4e'};
    border-radius: 16px;
    transition: all ease-in-out 0.1s;
  }
`;
