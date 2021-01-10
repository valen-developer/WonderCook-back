export class InvalidEmailException extends Error {
  constructor() {
    super("email invalid");
  }
}
