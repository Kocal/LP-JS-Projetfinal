import {Author} from "./author";
export class Article {

  constructor(public id: number,
              public title: string,
              public body: string,
              public created_by: Author,
              public created_at: Date,
              public updated_by?: Author,
              public updated_at?: Date,
              public tags?: string[]) {
  }
}
