import styled from 'styled-components';

export const Container = styled.div<{
  width?: string;
  height?: string;
  color?: string;
}>`
  .loader {
    width: ${({ width }) => (width ? `${width}px` : '24px')};
    height: ${({ height }) => (height ? `${height}px` : '24px')};
    border: 5px solid ${({ color }) => color || '#5f3dc4'};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
