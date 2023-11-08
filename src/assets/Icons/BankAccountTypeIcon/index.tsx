import { IconstMap } from './IconsMap';

interface IBankAccountTypeIcon {
  type: keyof typeof IconstMap;
}

export function BankAccountTypeIcon({ type }: IBankAccountTypeIcon) {
  const Icon = IconstMap[type];

  return <Icon />;
}
