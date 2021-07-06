import { EncryptService, TokenService, UserRepository } from "./ports";
import { InvalidEmailOrPassword } from "./errors/invalid-email-or-password";
import { SignInResponse, SignInUseCase } from "../domain/usecase/sign-in";

export class SignIn implements SignInUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptService: EncryptService,
    private readonly tokenService: TokenService
  ) {}

  async handle(email: string, password: string): Promise<SignInResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidEmailOrPassword();
    }

    const isValidPassword = await this.encryptService.compare(
      password,
      user.password
    );

    if (!isValidPassword) {
      throw new InvalidEmailOrPassword();
    }

    const currentDate = new Date();
    const expireIn = currentDate.setUTCHours(currentDate.getHours() + 8);
    const token = await this.tokenService.encode({ id: user.id }, expireIn);

    return token;
  }
}