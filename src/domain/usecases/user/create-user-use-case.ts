import { User } from "~/domain/entities/user";
import { IUserRepository } from "~/domain/repositories/user-repository";

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  public async execute({ email, name, password }: User) {
    console.log("response1");
    const response = await this.repository.create({ email, name, password });
    console.log("response2", response);
    return response;
  }
}
