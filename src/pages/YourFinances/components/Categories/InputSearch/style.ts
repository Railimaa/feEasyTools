/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .icon {
    position: absolute;
    left: 13px;
    top: 19px;
    cursor: pointer;
  }
`;

export const InputC = styled.input<{
  $visibleInput: boolean;
  theme: 'dark' | 'light';
}>`
  outline: none;
  border: ${({ $visibleInput, theme }) =>
    $visibleInput
      ? theme === 'dark'
        ? '1px solid rgba(255, 255, 255, 0.09)'
        : '1px solid #000'
      : 'none'};
  width: ${({ $visibleInput }) => ($visibleInput ? '100%' : '10%')};
  height: 52px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 35px;
  padding-right: 35px;
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  font-weight: 500;
  transition: all ease-out 0.2s;
  cursor: pointer;

  &::placeholder {
    color: ${({ theme }) => (theme === 'dark' ? '' : '#000')};
    opacity: ${({ theme }) => (theme === 'dark' ? 'none' : '0.5')};
  }
`;
