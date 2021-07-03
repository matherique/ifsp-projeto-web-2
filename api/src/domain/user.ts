export class User {
  public name: string;
  public email: string;
  public username: string;
  public password: string;

  constructor(
    name: string,
    email: string,
    username: string,
    password: string,
  ) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    Object.freeze(this);
  }

  static create(
    name: string,
    email: string,
    username: string,
    password: string,
  ) {
    return new User(
      name,
      email,
      username,
      password,
    )
  }

  validate(): boolean {
    return true;
  }
};
