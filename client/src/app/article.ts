export class Article {

  constructor(public id: number,
              public title: string,
              public slug: string,
              public body: string,
              public created_by: number,
              public created_at: Date,
              public updated_by?: number,
              public updated_at?: Date) {
  }

}
