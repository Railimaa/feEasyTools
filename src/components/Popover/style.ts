import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ContainerContent = styled.div`
  animation: ${slideIn} 0.3s forwards;
  padding: 16px;
  background: #495057;
  border: 16px;
  margin-top: 8px;
  border-radius: 8px;
`;
