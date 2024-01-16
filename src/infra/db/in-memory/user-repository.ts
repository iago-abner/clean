import { User } from "~/domain/entities/user";
import { IUserRepository } from "~/domain/repositories/user-repository";

export class UserRepositoryInMemory implements IUserRepository {
  constructor(private users: User[]) {}

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }
  async list() {
    return this.users;
  }
  async findByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
