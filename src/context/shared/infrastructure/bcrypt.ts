import { ICrypt } from "../domain/interfaces/crypt.interface";

import bcrypt from "bcrypt";

export class Bcrypt implements ICrypt {
  hasSync(data: string): string {
    return bcrypt.hashSync(data, 10);
  }
}
