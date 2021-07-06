export class Indicator {
  public id: string;
  public code: string;
  public name: string;
  public note: string;
  public source_organization: string;
  public created_at: string;
  public updated_at: string;

  constructor(
    code: string,
    name: string,
    note: string,
    source_organization: string,
  ) {
    this.code = code;
    this.name = name;
    this.note = note;
    this.source_organization = source_organization;
    Object.freeze(this);
  }

  static create(code: string, name: string, note: string, source_organization: string) {
    return new Indicator(code, name, note, source_organization);
  }
}
