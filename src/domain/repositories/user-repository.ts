import { User } from "~/domain/entities/user";

export interface IUserRepository {
  create: (user: User) => Promise<User>;
  list: () => Promise<User[]>;
  findByEmail: (email: string) => Promise<User | undefined>;
}
