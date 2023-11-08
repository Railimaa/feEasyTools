import { keyframes, styled } from 'styled-components';

const slideUpAndFade = keyframes`
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

export const ContainerContent = styled.div`
  animation: ${slideUpAndFade} 0.2s ease-in-out;
  padding: 8px;
  background: #f3f0ff;
  border-radius: 16px;
  margin-top: 8px;
`;

export const ContainerItem = styled.div<{
  color?: string;
  colorFontHover?: string;
  colorFont?: string;
}>`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  min-height: 40px;
  cursor: pointer;
  color: ${({ colorFont }) => colorFont || '#6741d9'};
  font-size: 14px;
  font-weight: bold;

  &:hover {
    color: ${({ colorFontHover }) => colorFontHover || '#fff'};
    font-weight: bold;
    background: ${({ color }) => color || '#845ef7'};
    border-radius: 16px;
    transition: all ease-in-out 0.1s;
  }
`;
