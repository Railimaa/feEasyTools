import styled, { keyframes } from 'styled-components';

const aanimationTitle = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  } to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
  animation: ${aanimationTitle} 2s infinite;

  h1 {
    color: #fff;
    box-shadow: 0px 2px 70px 4px #6741d9;
  }
`;
