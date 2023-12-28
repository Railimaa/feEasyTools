/* eslint-disable react/require-default-props */
import React from 'react';

import { Popover } from '../Popover';

import { Container, TextAreaC } from './style';

interface ITextAreaProps {
  value: string | null;
  onChange: (value: string) => void;
  label?: string;
}

export function TextArea({ value, onChange, label }: ITextAreaProps) {
  function onChangeValue(event: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <Container>
      <Popover.Root>
        <Popover.Trigger>
          {value ? `${value.slice(0, 14)}...` : 'Breve descrição'}
        </Popover.Trigger>

        <Popover.Content side="top">
          <TextAreaC
            value={value ?? ''}
            onChange={onChangeValue}
            name="description"
            id="description"
            cols={30}
            rows={10}
            placeholder="breve descrição da tarefa..."
          />
        </Popover.Content>
      </Popover.Root>

      {label && <div className="label">{label}</div>}
    </Container>
  );
}
