import { User } from "~/domain/entities/user";
import { UserRepositoryInMemory } from "~/domain/repositories/user-repository";
import { UserUseCase } from "~/domain/usecases/user";
import { UserController } from "~/presentation/controller/user-controller";
const memoryDatabase: User[] = [];

export function factoryUserController() {
  const userRepository = new UserRepositoryInMemory(memoryDatabase);
  const userUseCase = new UserUseCase(userRepository);
  const userController = new UserController(userUseCase);
  return userController;
}
