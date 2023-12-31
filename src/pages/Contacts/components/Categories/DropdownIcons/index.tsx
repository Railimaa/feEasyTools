/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { DropdownMenu } from '../../../../../components/DropdownMenu';

import { CategoryContactIcon } from './CategoryContactIcon';
import { iconsMap } from './CategoryContactIcon/iconsMap';
import { Container } from './style';

type IconCategory = {
  name: string;
};

const Icons: IconCategory[] = [
  { name: 'instagram' },
  { name: 'facebook' },
  { name: 'dribble' },
  { name: 'linkedin' },
  { name: 'tinder' },
  { name: 'twitch' },
  { name: 'twitter' },
  { name: 'youtube' },
];

interface IDropdownIconsProps {
  onChange: (icon: string) => void;
  value?: string;
}

export function DropdownIcons({ onChange, value }: IDropdownIconsProps) {
  const [selectedIcon, setSelectedIcon] = useState<null | IconCategory>(() => {
    if (!value) {
      return null;
    }

    const icons = Icons.find((i) => i.name === value) ?? null;

    return icons;
  });

  function handleChangeIcon(icon: IconCategory) {
    setSelectedIcon(icon);
    onChange(icon.name);
  }

  return (
    <DropdownMenu.Root>
      <Container>
        <DropdownMenu.Trigger>
          Ícone
          {selectedIcon && (
            <CategoryContactIcon
              name={selectedIcon.name as keyof typeof iconsMap}
              visibleBlack
            />
          )}
          {!selectedIcon && <ChevronDownIcon />}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
          side="top"
        >
          {Icons.map((icon, index) => (
            <DropdownMenu.Item
              key={index}
              onSelect={() => handleChangeIcon(icon)}
            >
              <CategoryContactIcon name={icon.name as keyof typeof iconsMap} />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </Container>
    </DropdownMenu.Root>
  );
}
