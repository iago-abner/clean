import { FindUserByEmailUseCase } from "~/domain/usecases/user/find-user-by-email-use-case";
import { Controller } from "~/presentation/protocols/controller";
import { HttpResponse } from "~/presentation/protocols/http";

class FindUserByEmailController implements Controller {
  constructor(
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase
  ) {}

  async handle(
    request: FindUserByEmailController.Request
  ): Promise<HttpResponse> {
    try {
      const user = await this.findUserByEmailUseCase.execute({
        email: request.email,
      });
      return { statusCode: 200, body: user };
    } catch (error) {
      return { statusCode: 500, body: error };
    }
  }
}

namespace FindUserByEmailController {
  export type Request = {
    email: string;
  };
}

export { FindUserByEmailController };
