import { MainSiteArticleListComponent } from "./main-site-article-list/main-site-article-list.component";
import { MainSiteComponent } from "./main-site.component";
import { ArticleComponent } from "./../articles/article/article.component";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: MainSiteComponent,
    children: [
      {
        path: "",
        component: MainSiteArticleListComponent
      },
      {
        path: "article/1",
        component: ArticleComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainSiteRoutingModule {}
