import { ArticleListComponent } from "./articles/article-list/article-list.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateArticleComponent } from "./articles/create-article/create-article.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminPanelComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "articles/create",
    component: CreateArticleComponent
  },
  {
    path: "articles/list",
    component: ArticleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
