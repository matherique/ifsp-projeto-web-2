import { EncryptService } from "../../usecase/ports";
import { hash } from "bcrypt"

export class BcryptAdapter implements EncryptService {
  constructor(private salt: number) {}

  compare(value: string, hashedValue: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  hash(value: string): Promise<string> {
    return hash(value, this.salt);
  }
}