import { IconstMap } from './IconsMap';

export function BankAccountTypeIcon({
  type,
}: {
  type: keyof typeof IconstMap;
}) {
  const Icon = IconstMap[type];

  return <Icon />;
}
