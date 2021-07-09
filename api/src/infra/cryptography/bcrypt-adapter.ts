import { EncryptService } from "../../usecase/ports";
import { hash, compare } from "bcrypt"

export class BcryptAdapter implements EncryptService {
  constructor(private salt: number) {}

  compare(value: string, hashedValue: string): Promise<boolean> {
    return compare(value, hashedValue)
  }

  hash(value: string): Promise<string> {
    return hash(value, this.salt);
  }
}