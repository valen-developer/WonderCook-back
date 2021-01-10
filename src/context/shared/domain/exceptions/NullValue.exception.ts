export class NullValueException extends Error {
  constructor(value: string) {
    super(`${value} can´t be null`);
  }
}
