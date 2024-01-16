import { Pool } from "pg";
import { User } from "~/domain/entities/user";
import { IUserRepository } from "~/domain/repositories/user-repository";

class UserRepositoryPostgres implements IUserRepository {
  private static INSTANCE: UserRepositoryPostgres;
  private client: Pool;

  constructor() {
    this.client = new Pool({
      user: "postgres",
      host: "localhost",
      database: "data",
      password: "postgres",
      port: 5432,
    });

    this.client.connect();
  }

  public static getInstance(): UserRepositoryPostgres {
    if (!UserRepositoryPostgres.INSTANCE) {
      UserRepositoryPostgres.INSTANCE = new UserRepositoryPostgres();
    }

    return UserRepositoryPostgres.INSTANCE;
  }

  async create({ name, email, password }: User): Promise<User> {
    console.log({ name, email, password });
    const result = await this.client.query(
      "INSERT INTO users (name, email, password, created_at) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, password, new Date()]
    );

    const newUser = result.rows[0];
    return newUser;
  }

  async findByEmail(email: string): Promise<User> {
    const result = await this.client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    const user = result.rows[0];
    return user;
  }

  async list(): Promise<User[]> {
    const result = await this.client.query("SELECT * FROM users");
    const users = result.rows;
    return users;
  }
}

export { UserRepositoryPostgres };
