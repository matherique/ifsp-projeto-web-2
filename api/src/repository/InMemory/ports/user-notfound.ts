export class UserNotFound extends Error {
  constructor () {
    super('user not found')
    this.name = 'UserNotFound'
  }
}