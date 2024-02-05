/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */

import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import { useCategoriesBankAccounts } from '../../hooks/useCategoriesBankAccounts';
import { ICategoryBankAccout } from '../../types/CategoryBankAccount';
import { DropdownMenu } from '../DropdownMenu';
import { FieldError } from '../FieldError';

import { IconsBank } from './IconsBank';
import { Container } from './style';

interface IColorsDropdownInputProps {
  error?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export function BankAccountIconsDropdownInput({
  error,
  onChange,
  value,
}: IColorsDropdownInputProps) {
  const { categoriesBankAccounts } = useCategoriesBankAccounts();
  const [selectedIcon, setSelectedIcon] = useState<null | ICategoryBankAccout>(
    () => {
      if (!value) {
        return null;
      }

      const icon = categoriesBankAccounts.find((i) => i.id === value) ?? null;

      return icon;
    },
  );

  function handleChangeIcon(icon: ICategoryBankAccout) {
    setSelectedIcon(icon);
    onChange?.(icon.id);
  }

  return (
    <Container color={error}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          Banco
          {selectedIcon && (
            <div className="icon">
              <IconsBank iconName={selectedIcon.icon} originColor />
            </div>
          )}
          <div className="default">
            {!selectedIcon && (
              <ChevronDownIcon width={24} height={24} color="#343A40" />
            )}
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          side="top"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            height: '100vh',
            maxHeight: '50vh',
            overflowY: 'auto',
          }}
        >
          {categoriesBankAccounts.map((icon) => (
            <DropdownMenu.Item
              onSelect={() => handleChangeIcon(icon)}
              key={icon.id}
            >
              <div
                style={{
                  background: `${icon.color}`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                }}
              >
                <IconsBank iconName={icon.icon} />
              </div>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {error && <FieldError error={error} />}
    </Container>
  );
}
