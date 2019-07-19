import { Article } from "./../../../main-site/article/article.model";
import { ArticleService } from "./../../../main-site/article/article.service";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.scss"]
})
export class ArticleListComponent implements OnInit {
  dataSource = new MatTableDataSource<Article>();
  displayedColumns = ["id", "title", "publishDate", "state"];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    //remember that the syntax is: we refer to dataSource.data property ( that have to be caused by material angular syntax)
    this.dataSource.data = this.articleService.getAvailableArticles();
  }
}
