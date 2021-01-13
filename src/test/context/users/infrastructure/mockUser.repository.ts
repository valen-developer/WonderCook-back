import {
  SaveResponse,
  UserRepository,
} from "../../../../context/User/domain/interfaces/User.repository";
import {
  User,
  UserCreatorInterface,
} from "../../../../context/User/domain/user.model";

export class MockUserRepository implements UserRepository {
  users: User[] = [];

  constructor() {}

  async save(user: User): Promise<SaveResponse> {
    if (this.isRegisteredUser(user)) {
      return {
        ok: false,
        message: "user already exists",
      };
    }

    this.users.push(user);

    return {
      ok: true,
      message: "user registered",
    };
  }

  async findByEmail(email: string): Promise<UserCreatorInterface> {
    const user = this.getUserIn(email);

    if (!user) throw new Error("user not found");

    return {
      uuid: user.uuid.value,
      name: user.name.value,
      email: user.email.value,
      password: user.password.value,
      alias: user.alias.value,
      createAt: new Date(user.createAt.value),
      updateAt: new Date(user.updateAt.value),
      bio: user.bio.value,
    };
  }

  private getUserIn(email: string): any {
    let userIn = null;

    this.users.forEach((user) => {
      if (user.email.value === email) userIn = user;
    });

    return userIn;
  }

  private isRegisteredUser(newUser: User): boolean {
    let isRegistered = false;

    this.users.forEach((user) => {
      if (user.email === newUser.email) {
        isRegistered = true;
      }
    });

    return isRegistered;
  }
}
