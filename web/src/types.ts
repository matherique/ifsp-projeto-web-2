export enum UserPermission {
  ADMIN = 'admin',
  DEFAULT = 'default'
}

export type User = {
  id: string
  name: string
  email: string
  created_at: string
  updated_at: string
  permission: UserPermission
}

export type Indicator = {
  id: string
  code: string
  name: string
  note: string
  source_organization: string
  created_at: string
  updated_at: string
}

export type Country = {
  id: string
  name: string
  code: string
  region: string
  created_at: string
  updated_at: string
}

export type IndicatorData = {
  id: string
  value: number
  year: number
  country_id: string
  indicator_id: string
  created_at: string
  updated_at: string
}
