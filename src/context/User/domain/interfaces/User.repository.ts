import { User, UserCreatorInterface } from "../user.model";

export interface UserRepository {
  save(user: User): Promise<SaveResponse>;
  findByEmail(email: string): Promise<UserCreatorInterface | null>;
}

export interface SaveResponse {
  ok: boolean;
  message: string;
}
