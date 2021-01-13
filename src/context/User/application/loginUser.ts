import { UserRepository } from "../domain/interfaces/User.repository";

export class LoginUser {
  private userRepository: UserRepository;

  constructor(repository: UserRepository) {
    this.userRepository = repository;
  }

  public async login(email: string) {
    return this.userRepository.findByEmail(email);
  }
}
