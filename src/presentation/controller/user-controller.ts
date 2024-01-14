import { UserUseCase } from "~/domain/usecases/user";
import { Controller } from "~/presentation/protocols/controller";
import { HttpResponse } from "~/presentation/protocols/http";

export class UserController implements Controller {
  constructor(private readonly user: UserUseCase) {}

  async handle(request: UserController.Request): Promise<HttpResponse> {
    try {
      const users = await this.user.getUserByEmail({ email: request.email });
      return { statusCode: 200, body: users };
    } catch (error) {
      return { statusCode: 500, body: error };
    }
  }
}

export namespace UserController {
  export type Request = {
    email: string;
  };
}
