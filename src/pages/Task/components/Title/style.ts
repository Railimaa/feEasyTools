import styled, { keyframes } from 'styled-components';

const scaleX = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1;}
`;

const scaleY = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const Container = styled.div<{ $animation: 'X' | 'Y' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-height: 50px;

  h1 {
    color: #fff;
    letter-spacing: -0.5px;
    animation: ${({ $animation }) => ($animation === 'X' ? scaleX : scaleY)} 2s
      infinite;
  }
`;
