import { User } from "../../domain/models";
import { InMemoryUserRepository } from "../../repository/in-memory";
import { RegisterUser } from "../../usecase/register-user";

describe("RegisterUser Use Case", () => {
  it("should create new user", async () => {
    const registerUserUsecase = new RegisterUser(new InMemoryUserRepository(), new encrypt);

    const userData = User.create("foo", "foo@mail.com", "pass123");
    const newUserData = await registerUserUsecase.handle(userData);

    expect(newUserData.email).toEqual(userData.email);
  });
});
