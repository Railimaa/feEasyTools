import styled from 'styled-components';

export const Container = styled.div<{ open: boolean }>`
  background: #272727;
  position: fixed;
  top: 0;
  width: 300px;
  height: 100%;
  left: ${({ open }) => (open ? '0' : '100%')};
  z-index: 200px;
`;
