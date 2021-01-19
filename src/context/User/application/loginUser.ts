import { HttpStatus4xx } from "../../../apps/exceptions/statusExceptions/4xxException";
import { ICrypt } from "../../shared/domain/interfaces/crypt.interface";
import { UserRepository } from "../domain/interfaces/User.repository";
import { User, UserObjectWithOutPassword } from "../domain/user.model";

export class LoginUser {
  constructor() {}

  public static async login(
    userRepository: UserRepository,
    crypt: ICrypt,
    email: string,
    password: string
  ): Promise<UserObjectWithOutPassword> {
    const userDB = await userRepository.findByEmail(email);

    const isValid = crypt.compare(password, userDB.password);

    if (!isValid || !userDB)
      throw new HttpStatus4xx("invalid user", "Email or password invalid", 401);

    return new User(userDB, crypt).toObjectWithOutPassword();
  }
}
