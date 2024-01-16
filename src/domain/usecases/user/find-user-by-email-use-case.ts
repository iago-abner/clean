import { IUserRepository } from "~/domain/repositories/user-repository";

class FindUserByEmailUseCase {
  constructor(private repository: IUserRepository) {}

  public async execute({ email }: { email: string }) {
    return this.repository.findByEmail(email);
  }
}

export { FindUserByEmailUseCase };
