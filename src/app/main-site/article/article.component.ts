// import { ArticleService } from "./../article.service";
import { Component, OnInit } from "@angular/core";
// import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  constructor() // private activatedRoute: ActivatedRoute,
  // private articleService: ArticleService //we will use it to get data downloaded by our service from firebase
  {}

  ngOnInit() {
    // const articleId = this.activatedRoute.snapshot.paramMap.get("id");
  }
}
