import { Article } from "./article.model";
import { ArticleService } from "./article.service";
// import { ArticleService } from "./../article.service";
import { Component, OnInit } from "@angular/core";
// import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  // private activatedRoute: ActivatedRoute ( angular book o'reilly)
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    //we fetch data from ArticleService to local variable.
    // this.articles = this.articleService.availableArticles; //we can't do so becouse we set and availableArticles to private and we ll use method to get coipy of an array:
    this.articles = this.articleService.getAvailableArticles();
    // const articleId = this.activatedRoute.snapshot.paramMap.get("id");
  }
}
