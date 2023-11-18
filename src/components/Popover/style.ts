import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ContainerContent = styled.div`
  animation: ${slideIn} 0.2s ease-in-out;
  padding: 16px;
  background: #495057;
  border: 16px;
  margin-top: 8px;
`;
