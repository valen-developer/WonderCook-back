import { LoginUser } from "../../../../context/User/application/loginUser";
import { RegisterUser } from "../../../../context/User/application/RegisterUser";
import { validUser } from "../domain/mocked.users";
import { MockUserRepository } from "../infrastructure/mockUser.repository";

describe("when an unregistered user try login", () => {
  const mockUserRepository = new MockUserRepository();

  const registerUser = new RegisterUser(validUser, mockUserRepository);
  const loginUser = new LoginUser(mockUserRepository);

  test("should throw an exception", () => {
    expect(async () => {
      await loginUser.login("random@email.com");
    }).rejects.toThrowError();
  });

  describe("when a registered user try login", () => {
    test("should return a valid user", async () => {
      await registerUser.register();
      const userDB = await loginUser.login(validUser.email.value);

      expect(userDB.email).toEqual(validUser.email.value);
    });
  });
});
