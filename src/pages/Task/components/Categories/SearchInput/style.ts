import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .icon {
    position: absolute;
    top: 20px;
    left: 14px;
  }
`;

export const Input = styled.input<{ $visibleInput: boolean }>`
  width: ${({ $visibleInput }) => ($visibleInput ? `${100}%` : `${2}%`)};
  height: 52px;
  padding-left: 38px;
  padding-right: 38px;
  border-radius: 12px;
  border: ${({ $visibleInput }) =>
    $visibleInput ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'};
  color: #fff;
  background: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:focus {
    border: ${({ $visibleInput }) =>
      $visibleInput ? '1px solid #6741d9' : 'none'};
  }

  &::placeholder {
    color: #fff;
    font-size: 14px;
    letter-spacing: -0.5px;
  }

  @media (min-width: 768px) {
    width: ${({ $visibleInput }) => ($visibleInput ? `${40}%` : `${2}%`)};
  }
`;
