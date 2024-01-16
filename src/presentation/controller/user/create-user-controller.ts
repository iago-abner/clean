import { CreateUserUseCase } from "~/domain/usecases/user/create-user-use-case";
import { Controller } from "~/presentation/protocols/controller";
import { HttpResponse } from "~/presentation/protocols/http";

class CreateUserlController implements Controller {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(request: CreateUserlController.Request): Promise<HttpResponse> {
    try {
      const createdUser = await this.createUserUseCase.execute({
        name: request.name,
        email: request.email,
        password: request.password,
      });
      console.log({ createdUser });
      return { statusCode: 200, body: createdUser };
    } catch (error) {
      return { statusCode: 500, body: error };
    }
  }
}

namespace CreateUserlController {
  export type Request = {
    email: string;
    name: string;
    password: string;
  };
}

export { CreateUserlController };
