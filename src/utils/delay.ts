/* eslint-disable no-promise-executor-return */
export function delay(ms = 500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
