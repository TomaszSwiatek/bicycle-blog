import { Article } from "./article.model";

export class ArticleService {
  //here we will manage all the articles.
  //private prop causes that array cant be edited from the other places in the app.
  private availableArticles: Article[] = [
    {
      id: 1,
      title: "The best cycling routes in Poland",
      author: "Tomasz Świątek",
      state: "in progress",
      publishDate: new Date() //we have to add in futere 'new Date() to an submit event where we will create article.
    },
    {
      id: 2,
      title: "The best route in Western Pomerania",
      author: "Katarzyna Blaszka",
      state: "in progress",
      publishDate: new Date() //we have to add in futere 'new Date() to an submit event where we will create article.
    },
    {
      id: 3,
      title: "Bicycle routes along the main Polish river - the Vistula",
      author: "Tomasz Świątek",
      state: "in progress",
      publishDate: new Date() //we have to add in futere 'new Date() to an submit event where we will create article.
    },
    {
      id: 4,
      title: "Deep into the Tuchola Forests - a Kashubian route",
      author: "Tomasz Świątek",
      state: "in progress",
      publishDate: new Date() //we have to add in futere 'new Date() to an submit event where we will create article.
    }
  ];
  //becouse of that we did private array, we have to add helper method to get access to an array:
  getAvailableArticles() {
    return this.availableArticles.slice(); //where slice method will create the copy of an array.
  }
}
