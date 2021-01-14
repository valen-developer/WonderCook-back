import { SaveResponse } from "../../../shared/domain/interfaces/saveReponse.interface";
import { User, UserCreatorInterface } from "../user.model";

export interface UserRepository {
  save(user: User): Promise<SaveResponse>;
  findByEmail(email: string): Promise<UserCreatorInterface>;
}
