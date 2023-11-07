/* eslint-disable react/require-default-props */
import { Container } from './style';

interface ISpinnerProps {
  width?: string;
  height?: string;
  color?: string;
}

export function Spinner({ width, height, color }: ISpinnerProps) {
  return (
    <Container width={width} height={height} color={color}>
      <span className="loader" />
    </Container>
  );
}
