import { User } from "../../domain/user";
import { InvalidEmail } from "../../domain/user/errors/invalid-email";
import { InMemoryUserRepository } from "../../repository/InMemory";
import { RegisterUser } from "../../usecase/register-user/register-user";


describe('RegisterUser Use Case', () => {
  it("should create new user", async () => {
    const registerUserUsecase = new RegisterUser(new InMemoryUserRepository())
    
    const userData = User.create("foo", "foo@mail.com", "foofoo", "pass123")
    const newUserData = await registerUserUsecase.handle(userData)
    
    expect(newUserData.email).toEqual(userData.email)
  })

})