/* eslint-disable react/require-default-props */
import { useState } from 'react';

import { FormatDate } from '../../utils/formatDate';
import { DatePicker } from '../DatePicker';
import { FieldError } from '../FieldError';
import { Popover } from '../Popover';

import { Container } from './style';

interface IDatePickerInputProps {
  value?: Date;
  onChange?: (date: Date) => void;
  error?: string;
}

export function DatePickerInput({
  value,
  onChange,
  error,
}: IDatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(value ?? new Date());

  function handleDateChange(date: Date) {
    setSelectedDate(date);
    onChange?.(date);
  }

  return (
    <Container color={error}>
      <Popover.Root>
        <Popover.Trigger>
          <span id="Data">Data</span>
          <div className="formatDate">{FormatDate(selectedDate)}</div>
        </Popover.Trigger>

        <Popover.Content>
          <DatePicker
            value={selectedDate}
            onChange={(date) => handleDateChange(date)}
          />
        </Popover.Content>
      </Popover.Root>

      {error && <FieldError error={error} />}
    </Container>
  );
}
