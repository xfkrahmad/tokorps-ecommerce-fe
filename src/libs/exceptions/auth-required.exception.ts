export class AuthRequiredException extends Error {
  constructor(message: string = 'Authentication required') {
    super(message);
    this.name = 'AuthRequiredException';
  }
}
