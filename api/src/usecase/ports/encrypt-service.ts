export interface EncryptService {
  compare(value: string, hashedValue: string): Promise<boolean>;
}
