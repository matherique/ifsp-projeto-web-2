export class Log {
  public user_id: string
  public country_id: string
  public indicator_id: string
  public created_at: Date
  public updated_at: Date

  constructor(user_id: string, country_id: string, indicator_id: string) {
    this.user_id = user_id
    this.country_id = country_id
    this.indicator_id = indicator_id
    Object.freeze(this)
  }

  static create(user_id: string, country_id: string, indicator_id: string) {
    return new Log(user_id, country_id, indicator_id)
  }
}
