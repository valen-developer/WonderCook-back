import { Bcrypt } from "../../../../context/shared/infrastructure/bcrypt";
import { User } from "../../../../context/User/domain/user.model";

const crypt = new Bcrypt();

export const validUser = new User(
  {
    name: "user1",
    alias: "user1",
    bio: "",
    createAt: new Date(),
    email: "valid@email.com",
    password: "validPassword",
    updateAt: new Date(),
    uuid: "ñamañlcmasmc21",
  },
  crypt
);
