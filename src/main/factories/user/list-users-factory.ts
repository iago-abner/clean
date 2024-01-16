import { UserRepositoryPostgres } from "~/infra/db/postgres/user-repository";
import { ListUsersUseCase } from "~/domain/usecases/user/list-users-use-case";
import { ListUsersController } from "~/presentation/controller";

export function factoryListUsersController() {
  const userRepository = UserRepositoryPostgres.getInstance();
  const userUseCase = new ListUsersUseCase(userRepository);
  const userController = new ListUsersController(userUseCase);
  return userController;
}
