/* eslint-disable react/require-default-props */
import { iconsMap } from './iconsMap';

interface ICategoryIconProps {
  name: keyof typeof iconsMap;
  visibleBlack?: boolean;
}

export function CategoryContactIcon({
  name,
  visibleBlack,
}: ICategoryIconProps) {
  const Icon = iconsMap[name];

  return <Icon color={visibleBlack ? '#000' : ''} />;
}
