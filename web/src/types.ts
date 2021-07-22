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
