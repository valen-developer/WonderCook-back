export class HttpStatus4xx implements Error {
  name: string;
  message: string;
  statusCode: number;
  stack?: string | undefined;

  constructor(name: string, message: string, statusCode: number) {
    this.message = message;
    this.name = name;
    this.statusCode = statusCode;
  }
}
