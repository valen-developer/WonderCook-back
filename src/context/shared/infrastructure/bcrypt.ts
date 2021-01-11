import { ICrypt } from "../domain/interfaces/crypt.interface";

import bcrypt from "bcrypt";

export class Bcrypt implements ICrypt {
  hasSync(data: string): string {
    if (!data) return "";
    return bcrypt.hashSync(data, 10);
  }

  compare(data: string, encrypted: string): boolean {
    return bcrypt.compareSync(data, encrypted);
  }
}
