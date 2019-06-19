import { MainSiteComponent } from "./main-site.component";
import { ArticleComponent } from "./../articles/article/article.component";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  // {
  //   path: "",
  //   component: MainSiteComponent,
  //   children: [
  //     {
  //       path: "article",
  //       children: [
  //         {
  //           path: ":id",
  //           component: ArticleComponent
  //         }
  //       ]
  //     }
  //   ]
  // }
  {
    path: "",
    component: MainSiteComponent,
    children: [
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
