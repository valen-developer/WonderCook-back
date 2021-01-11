import { UserRepository } from "../domain/interfaces/User.repository";
import { User } from "../domain/user.model";

export class RegisterUser {
  private user: User;
  private repository: UserRepository;

  constructor(user: User, repository: UserRepository) {
    this.repository = repository;
    this.user = user;
  }

  public async register(): Promise<void> {
    const saveReponse = await this.repository.save(this.user);

    if (!saveReponse.ok) throw new Error(saveReponse.message);
  }
}
