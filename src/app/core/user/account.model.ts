export class Account {
  constructor(
    public id: number,
    public activated: boolean,
    public authorities: string[],
    public email: string,
    public firstName: string,
    public langKey: string,
    public lastName: string,
    public login: string,
    public imageUrl: string,
    public vendorId: number
  ) {}
}
