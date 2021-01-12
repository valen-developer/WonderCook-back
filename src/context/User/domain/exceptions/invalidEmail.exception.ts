export class InvalidEmailException implements Error {
  name: string;
  message: string;
  stack?: string | undefined;

  constructor(message = "invalid email") {
    this.name = "InvalidEmailException";
    this.message = message;
  }
}
