export interface ICrypt {
  hasSync(data: string): string;

  compare(data: string, encrypted: string): boolean;
}
