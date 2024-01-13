import { User } from "../entities/user";

interface UserRepository {
  create: (user: User) => void;
  list: () => User[];
  findByEmail: (email: string) => User | undefined;
}

export class UserRepositoryInMemory implements UserRepository {
  constructor(private users: User[]) {}

  create(user: User): void {
    this.users.push(user);
  }
  list(): User[] {
    return this.users;
  }
  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}
