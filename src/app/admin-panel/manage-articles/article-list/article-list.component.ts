import { Article } from "./../../../main-site/article/article.model";
import { ArticleService } from "./../../../main-site/article/article.service";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.scss"]
})
export class ArticleListComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Article>();
  displayedColumns = ["id", "title", "publishDate", "state"];
  //flag {static: true/false} added in ng ver. 8. query results with static true aRE AVAILABLE in ngonInit, and with static:false will availabl in ngAfterViewInit.
  @ViewChild(MatSort, { static: true }) sort: MatSort; //sort - variable name, MatSort - type of var

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    //remember that the syntax is: we refer to dataSource.data property ( that have to be caused by material angular syntax)
    this.dataSource.data = this.articleService.getAvailableArticles();
  }
  ngAfterViewInit(): void {
    //here we fetch data from template. Becouse of it is from template we have to do it here - not in ngonInit which is initialize before template is fixed.( we fetch from @ViewChild())
    //its execute ONCE, AFTER VIEW IS DONE - AFTER FIRST INITIALIZING.
    this.dataSource.sort = this.sort; //sort is another builtin dataSource property. and this.sort is our ViewChild which refer to template.
  }
  doFilter(filterValue: string) {
    //this is only possible to do with angular material features
    //below we adjust filter property built in angular material table feature.
    this.dataSource.filter = filterValue.trim().toLowerCase(); //we trim to avoid whitespace and we convert to lowecase to search exactly what is in table written.
  }
}
