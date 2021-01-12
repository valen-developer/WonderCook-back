import { RegisterUser } from "../../../../context/User/application/RegisterUser";
import { MockUserRepository } from "../infrastructure/mockUser.repository";

import { validUser } from "../domain/mocked.users";

//TODO:
describe("when an user try register and is a valid user", () => {
  const mockUserRepository = new MockUserRepository();
  const registerUser = new RegisterUser(validUser, mockUserRepository);

  test("shouldn´t throw an exception", () => {
    expect(async () => {
      await registerUser.register();
    }).rejects.not.toThrowError();
  });

  describe("when user already registered", () => {
    test("should throw an exception", async () => {
      expect(async () => {
        await registerUser.register();
      }).rejects.toThrow();
    });
  });
});
