import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  // str. 240 how to get it by http client - angular. ( we want to make it by firebase functionality)
  constructor() {}
  // but here in class, but not in the constructor probbably will define method to fetch data from firebase. ( collections)
  // it could look like this with http:
  //   getArticle(id: string): Observable<Article> {
  //     // return this.http.get<Article>('/api/article/' + id);  //this is simple path to own node server on our PC. <article> is a model of our article, but we didnt created yet. we have to do some imports to run this.
}
