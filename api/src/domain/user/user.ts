import { InvalidEmail } from "./errors/invalid-email";

export class User {
  public name: string;
  public email: string;
  public username: string;
  public password: string;

  constructor(name: string, email: string, username: string, password: string) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    Object.freeze(this);
  }

  static create(name: string, email: string, username: string, password: string) {
    return new User(name, email, username, password)
  }

  validate(): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(this.email).toLowerCase())) {
      throw new InvalidEmail()
    }

    return true;
  }
};
