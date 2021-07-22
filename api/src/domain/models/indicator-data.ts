export class IndicatorData {
  public id: string
  public value: number
  public year: number
  public country_id: string
  public indicator_id: string
  public created_at: Date
  public updated_at: Date

  constructor(
    value: number,
    year: number,
    country_id: string,
    indicator_id: string
  ) {
    this.value = value
    this.year = year
    this.country_id = country_id
    this.indicator_id = indicator_id
    Object.freeze(this)
  }

  static create(
    value: number,
    year: number,
    country_id: string,
    indicator_id: string
  ) {
    return new IndicatorData(value, year, country_id, indicator_id)
  }
}
