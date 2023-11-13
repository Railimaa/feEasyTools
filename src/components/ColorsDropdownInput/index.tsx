/* eslint-disable react/require-default-props */
import { CaretDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { ColorIcon } from '../../assets/Icons/ColorIcon';
import { DropdownMenu } from '../DropdownMenu';
import { FieldError } from '../FieldError';

import { Container } from './style';

interface IColorsDropdownInputProps {
  error?: string;
  onChange?: (value: string) => void;
  value?: string;
}

type Color = {
  color: string;
  bg: string;
};

const colors: Color[] = [
  { color: '#868E96', bg: '#F8F9FA' },
  { color: '#FA5252', bg: '#FFF5F5' },
  { color: '#E64980', bg: '#FFF0F6' },
  { color: '#BE4BDB', bg: '#F8F0FC' },
  { color: '#7950F2', bg: '#F3F0FF' },
  { color: '#4C6EF5', bg: '#EDF2FF' },
  { color: '#228BE6', bg: '#E7F5FF' },
  { color: '#15AABF', bg: '#E3FAFC' },
  { color: '#12B886', bg: '#E6FCF5' },
  { color: '#40C057', bg: '#EBFBEE' },
  { color: '#82C91E', bg: '#F4FCE3' },
  { color: '#FAB005', bg: '#FFF9DB' },
  { color: '#FD7E14', bg: '#FFF4E6' },
  { color: '#212529', bg: '#F8F9FA' },
  { color: '#74C0FC', bg: '#E7F5FF' },
  { color: '#fff', bg: '#DEE2E6' },
];

export function ColorsDropdownInput({
  error,
  onChange,
  value,
}: IColorsDropdownInputProps) {
  const [selectedColor, setSelectedColor] = useState<null | Color>(() => {
    if (!value) {
      return null;
    }

    const color = colors.find((c) => c.color === value) ?? null;

    return color;
  });

  function handleSelectedColor(color: Color) {
    setSelectedColor(color);
    onChange?.(color.color);
  }

  return (
    <Container>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          Cor
          <div className="iconChevronDown">
            {!selectedColor && (
              <CaretDownIcon width={20} height={20} color="#000" />
            )}
          </div>
          <div className="iconColor">
            {selectedColor && (
              <ColorIcon color={selectedColor.color} bg={selectedColor.bg} />
            )}
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
          side="top"
        >
          {colors.map((color) => (
            <DropdownMenu.Item
              key={color.color}
              onSelect={() => handleSelectedColor(color)}
            >
              <ColorIcon color={color.color} bg={color.bg} />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {error && <FieldError error={error} />}
    </Container>
  );
}
