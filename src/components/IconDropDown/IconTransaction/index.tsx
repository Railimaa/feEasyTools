import { iconsMap } from './iconsMap';

interface IIconTransaction {
  iconName: keyof typeof iconsMap;
}

export function IconTransaction({ iconName }: IIconTransaction) {
  const Icon = iconsMap[iconName];

  return <Icon />;
}
