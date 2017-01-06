export class Author {
  constructor(public id: number,
              public firstname: string,
              public lastname: string,
              public articles_id?: number[]) {
  }

  toString() {
    return this.firstname + ' ' + this.lastname
  }
}
