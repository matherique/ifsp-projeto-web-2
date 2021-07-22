export class Country {
  public id?: string
  public name: string
  public code: string
  public region: string
  public created_at: Date
  public updated_at: Date

  constructor(name: string, code: string, region: string) {
    this.name = name
    this.code = code
    this.region = region
    Object.freeze(this)
  }

  static create(name: string, code: string, region: string) {
    return new Country(name, code, region)
  }
}
