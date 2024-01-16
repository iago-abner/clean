import { UserRepositoryPostgres } from "~/infra/db";
import { CreateUserUseCase } from "~/domain/usecases/user/create-user-use-case";
import { CreateUserlController } from "~/presentation/controller";

export function factoryCreateUserController() {
  const userRepository = UserRepositoryPostgres.getInstance();
  const userUseCase = new CreateUserUseCase(userRepository);
  const userController = new CreateUserlController(userUseCase);
  return userController;
}
