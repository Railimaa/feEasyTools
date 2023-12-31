import { iconsMap } from './iconsMap';

interface IIconsCategoryProps {
  iconName: keyof typeof iconsMap;
}

export function IconsCategory({ iconName }: IIconsCategoryProps) {
  const Icon = iconsMap[iconName];

  return <Icon />;
}
