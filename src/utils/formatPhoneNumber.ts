export function formatPhoneNumber(value: string) {
  const numericOnly = value.replace(/\D/g, '');

  const formattedPhoneNumber = `(${numericOnly.substring(
    0,
    2,
  )}) ${numericOnly.substring(2)}`;

  return formattedPhoneNumber;
}
