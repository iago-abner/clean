import { ListUsersUseCase } from "~/domain/usecases/user/list-users-use-case";
import { Controller } from "~/presentation/protocols/controller";
import { HttpResponse } from "~/presentation/protocols/http";

class ListUsersController implements Controller {
  constructor(private readonly listUsersUseCase: ListUsersUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const users = await this.listUsersUseCase.execute();
      return { statusCode: 200, body: users };
    } catch (error) {
      return { statusCode: 500, body: error };
    }
  }
}

export { ListUsersController };
