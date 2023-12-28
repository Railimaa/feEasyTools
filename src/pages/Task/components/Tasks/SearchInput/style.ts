import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 20px;
    left: 14px;
  }
`;

export const InputC = styled.input<{ $openInput: boolean }>`
  width: ${({ $openInput }) => ($openInput ? `${200}px` : `${2}px`)};
  height: 52px;
  padding-left: 38px;
  padding-right: 38px;
  border-radius: 12px;
  border: ${({ $openInput }) =>
    $openInput ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'};
  background: transparent;
  outline: none;
  color: #fff;
  cursor: pointer;

  &:focus {
    border: ${({ $openInput }) => ($openInput ? '1px solid #6741d9' : 'none')};
    transition: all ease-in-out 0.3s;
  }

  &::placeholder {
    color: #fff;
    font-size: 14px;
    letter-spacing: -0.5px;
  }

  @media (min-width: 768px) {
    width: ${({ $openInput }) => ($openInput ? `${300}px` : `${70}px`)};
  }
`;
