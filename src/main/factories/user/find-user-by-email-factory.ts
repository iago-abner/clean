import { UserRepositoryPostgres } from "~/infra/db/postgres/user-repository";
import { FindUserByEmailUseCase } from "~/domain/usecases/user/find-user-by-email-use-case";
import { FindUserByEmailController } from "~/presentation/controller";

export function factoryFindUserByEmailController() {
  const userRepository = UserRepositoryPostgres.getInstance();
  const userUseCase = new FindUserByEmailUseCase(userRepository);
  const userController = new FindUserByEmailController(userUseCase);
  return userController;
}
