import { UserRepository } from "../ports";
import { EncryptService } from "../ports/encrypt-service";
import { TokenService } from "../ports/token-service";
import { SignInData } from "./sign-in-data";
import { SignInResponse } from "./sign-in-response";

export interface SignInUseCase {
  handle: (data: SignInData) => Promise<SignInResponse>;
}

export class SignIn implements SignInUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService,
    private readonly encryptService: EncryptService
  ) {}

  async handle(data: SignInData): Promise<SignInResponse> {
    return { token: "blabla" };
  }
}
