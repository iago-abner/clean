import { IUserRepository } from "~/domain/repositories/user-repository";

class ListUsersUseCase {
  constructor(private repository: IUserRepository) {}

  public async execute() {
    const response = await this.repository.list();
    console.log(response);
    return response;
  }
}

export { ListUsersUseCase };
