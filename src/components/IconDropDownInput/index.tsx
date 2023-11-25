/* eslint-disable react/require-default-props */
import { CaretDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { DropdownMenu } from '../DropdownMenu';
import { FieldError } from '../FieldError';
import { IconTransaction } from '../IconTransaction';

import { Container } from './style';

interface IIconDropdownProps {
  value: string;
  onChange?: (value: string) => void;
  error?: string;
}

type Icon = {
  name: string;
  id: number;
};

const iconsMap: Icon[] = [
  { name: 'receita', id: 1 },
  { name: 'despesa', id: 2 },
  { name: 'food', id: 3 },
  { name: 'fun', id: 4 },
  { name: 'grocery', id: 5 },
  { name: 'home', id: 6 },
  { name: 'education', id: 7 },
  { name: 'clothes', id: 8 },
  { name: 'transport', id: 9 },
  { name: 'travel', id: 10 },
];

export function IconDropDownInput({
  value,
  onChange,
  error,
}: IIconDropdownProps) {
  const [selectIcon, setSelectIcon] = useState<null | Icon>(() => {
    if (!value) {
      return null;
    }

    const icons = iconsMap.find((i) => i.name === value) ?? null;

    return icons;
  });

  function handleChangeIcon(icon: Icon) {
    setSelectIcon(icon);
    onChange?.(icon.name);
  }

  return (
    <Container>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          Ícone
          {selectIcon && (
            <div className="icon">
              <IconTransaction iconName={selectIcon.name} />
            </div>
          )}
          {!selectIcon && (
            <div className="chevronIcon">
              <CaretDownIcon width={20} height={20} color="#000" />
            </div>
          )}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          side="top"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {iconsMap.map((icon) => (
            <DropdownMenu.Item
              key={icon.id}
              onSelect={() => handleChangeIcon(icon)}
            >
              <IconTransaction iconName={icon.name} />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {error && <FieldError error={error} />}
    </Container>
  );
}
