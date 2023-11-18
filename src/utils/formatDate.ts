export function FormatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-br').format(date);
}
