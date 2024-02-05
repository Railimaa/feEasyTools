import { IconstMap } from './IconsMap';

interface IBankAccountTypeIcon {
  type: string;
}

export function BankAccountTypeIcon({ type }: IBankAccountTypeIcon) {
  const Icon = IconstMap[type as keyof typeof IconstMap];

  return <Icon />;
}
