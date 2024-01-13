import { UserUseCase } from "../../domain/usecases/user";

export type HttpResponse = {
  statusCode: number;
  body: any;
};

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>;
}

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
