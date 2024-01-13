import { User } from "../entities/user";
import { UserRepositoryInMemory } from "../repositories/user-repository";

export class UserUseCase {
  constructor(private repository: UserRepositoryInMemory) {}

  public createUser({ email, name, password }: User) {
    this.repository.create({ email, name, password });
  }

  public listUsers() {
    return this.repository.list();
  }

  public getUserByEmail({ email }: { email: string }) {
    return this.repository.findByEmail(email);
  }
}
