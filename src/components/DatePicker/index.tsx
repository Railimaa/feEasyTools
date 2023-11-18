/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-unstable-nested-components */
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';

import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

import { Container } from './style';

interface IDatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

export function DatePicker({ value, onChange }: IDatePickerProps) {
  return (
    <Container>
      <DayPicker
        locale={ptBR}
        selected={value}
        mode="single"
        onSelect={(date) => onChange(date ?? new Date())}
        classNames={{
          caption: 'caption',
          nav: 'nav',
          nav_button_previous: 'nav_button_previous',
          nav_button_next: 'nav_button_next',
          head_cell: 'head_cell',
          button: 'button',
          day: 'day',
          day_today: 'day_today',
          day_selected: 'day_selected',
        }}
        formatters={{
          formatCaption: (date, options) => (
            <span>
              {capitalizeFirstLetter(format(date, 'LLLL yyyy', options))}
            </span>
          ),
        }}
      />
    </Container>
  );
}
