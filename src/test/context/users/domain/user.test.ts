import { Bcrypt } from "../../../../context/shared/infrastructure/bcrypt";
import { InvalidEmailException } from "../../../../context/User/domain/exceptions/invalidEmail.exception";
import { User } from "../../../../context/User/domain/user.model";
import { UserPassword } from "../../../../context/User/domain/valueObjects/password.valueObject";

//TODO:Create fake crypt
const crypt = new Bcrypt();

describe("when build a new User object", () => {
  //TODO: get better test
  describe("any argument is a not valid argument", () => {
    test("should throw an exception", () => {
      expect(() => {
        const user = new User(
          {
            alias: "new alias",
            bio: null,
            createAt: new Date(),
            updateAt: new Date(),
            email: "bademail",
            name: "name",
            password: "123456",
            uuid: "0qdkanscklan721",
          },
          crypt
        );
      }).toThrowError(InvalidEmailException);
    });
  });
});
