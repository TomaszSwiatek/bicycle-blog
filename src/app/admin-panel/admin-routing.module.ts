import { ArticleListComponent } from "./../articles/article-list/article-list.component";
import { CreateArticleComponent } from "./../articles/create-article/create-article.component";
import { SignupComponent } from "./../auth/signup/signup.component";
import { LoginComponent } from "./../auth/login/login.component";
import { AdminPanelComponent } from "./admin-panel.component";
import { MainSiteComponent } from "./../main-site/main-site.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "admin",
    component: AdminPanelComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "loggedin/create",
    component: CreateArticleComponent
  },
  {
    path: "loggedin/articles",
    component: ArticleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
