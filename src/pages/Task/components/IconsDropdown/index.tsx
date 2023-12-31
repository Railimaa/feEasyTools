/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { DropdownMenu } from '../../../../components/DropdownMenu';

import { IconsCategory } from './IconsCategory';
import { iconsMap } from './IconsCategory/iconsMap';
import { Container } from './style';

type IconCategory = {
  name: string;
};

const Icons: IconCategory[] = [
  { name: 'me' },
  { name: 'food' },
  { name: 'fun' },
  { name: 'grocery' },
  { name: 'home' },
  { name: 'education' },
  { name: 'clothes' },
  { name: 'transport' },
  { name: 'travel' },
];

interface IIconsDropdownProps {
  onChange: (value: string) => void;
  value?: string;
}

export function IconsDropdown({ onChange, value }: IIconsDropdownProps) {
  const [selecteIcon, setSelectIcon] = useState<null | IconCategory>(() => {
    if (!value) {
      return null;
    }

    const icon = Icons.find((i) => i.name === value);

    return icon;
  });

  function handleChangeIcon(icon: IconCategory) {
    setSelectIcon(icon);
    onChange(icon.name);
  }

  return (
    <DropdownMenu.Root>
      <Container>
        <DropdownMenu.Trigger>
          Icon
          {selecteIcon && (
            <IconsCategory
              iconName={selecteIcon.name as keyof typeof iconsMap}
            />
          )}
          {!selecteIcon && <ChevronDownIcon />}
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
              <IconsCategory iconName={icon.name as keyof typeof iconsMap} />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </Container>
    </DropdownMenu.Root>
  );
}
