import styled, { css } from 'styled-components';

export const Container = styled.div<{ $visibleSearch: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  margin-bottom: 28px;
  margin-top: 28px;

  .icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    left: ${({ $visibleSearch }) => $visibleSearch && `${14}px`};

    span {
      ${({ $visibleSearch }) =>
        $visibleSearch &&
        css`
          display: none;
        `}
      color: #878787;
      letter-spacing: -0.5px;
    }
  }
`;

export const InputSearchC = styled.input<{ $visibleSearch: boolean }>`
  width: 100%;
  max-width: ${({ $visibleSearch }) =>
    $visibleSearch ? `${500}px` : `${12}px`};
  height: ${({ $visibleSearch }) => ($visibleSearch ? `${52}px` : '0px')};
  border-radius: ${({ $visibleSearch }) => ($visibleSearch ? '25px' : '0px')};
  border: ${({ $visibleSearch }) =>
    $visibleSearch ? '1px solid #6741d9' : 'none'};
  padding-left: ${({ $visibleSearch }) => ($visibleSearch ? '40px' : 'none')};
  padding-right: ${({ $visibleSearch }) => ($visibleSearch ? '40px' : 'none')};
  outline: none;
  color: #fff;
  background: transparent;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
`;
