/* eslint-disable react/require-default-props */
import { iconsMap } from './iconsMap';

interface IIconsBankProps {
  iconName: string;
  originColor?: boolean;
}

export function IconsBank({ iconName, originColor }: IIconsBankProps) {
  const Icon = iconsMap[iconName as keyof typeof iconsMap];

  return <Icon originColor={originColor} />;
}
