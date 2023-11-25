import { iconsMap } from './iconsMap';

interface IIconTransaction {
  iconName: string;
}

export function IconTransaction({ iconName }: IIconTransaction) {
  const Icon = iconsMap[iconName];

  return <Icon />;
}
