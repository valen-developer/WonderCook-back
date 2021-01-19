import { Bcrypt } from "../../../../context/shared/infrastructure/bcrypt";
import { LoginUser } from "../../../../context/User/application/loginUser";
import { RegisterUser } from "../../../../context/User/application/RegisterUser";
import { MockRecipeRepository } from "../../recipes/infrastructure/mockRecipe.repository";
import { validUser } from "../domain/mocked.users";
import { MockUserRepository } from "../infrastructure/mockUser.repository";

describe("when an unregistered user try login", () => {
  const mockUserRepository = new MockUserRepository();
  const registerUser = new RegisterUser(validUser, mockUserRepository);

  test("should throw an exception", () => {
    expect(async () => {
      await LoginUser.login(
        mockUserRepository,
        new Bcrypt(),
        "random@email.com",
        "12345"
      );
    }).rejects.toThrowError();
  });

  describe("when a registered user try login", () => {
    test("should return a valid user", async () => {
      await registerUser.register();
      const userDB = await LoginUser.login(
        mockUserRepository,
        new Bcrypt(),
        validUser.email.value,
        "validPassword"
      );

      expect(userDB.email).toEqual(validUser.email.value);
      expect(userDB.uuid).toEqual(validUser.uuid.value);
    });
  });
});
