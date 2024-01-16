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

export const ContainerContent = styled.div<{ theme: 'dark' | 'light' }>`
  animation: ${slideUpAndFade} 0.3s;
  padding: 8px;
  background: ${({ theme }) => (theme === 'dark' ? '#272727' : '#f2f2f2')};
  border-radius: 16px;
  margin-top: 8px;
`;

export const ContainerItem = styled.div<{
  color?: string;
  theme: 'dark' | 'light';
}>`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  min-height: 40px;
  cursor: pointer;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  font-size: 14px;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    font-weight: bold;
    background: ${({ theme }) => (theme === 'dark' ? '#1d1d1d' : '#fff')};
    border-radius: 16px;
    transition: all ease-in-out 0.1s;
  }

  a {
    outline: none;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    text-decoration: none;

    &.active {
      border-bottom: 1px solid #5f3dc4;
      padding-bottom: 4px;
    }
  }
`;
