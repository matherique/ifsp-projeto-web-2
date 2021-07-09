export class User {
  public id?: string;
  public name: string;
  public email: string;
  public password: string;
  public created_at: Date;
  public updated_at: Date;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    Object.freeze(this);
  }

  static create(name: string, email: string, password: string) {
    return new User(name, email, password);
  }
}
