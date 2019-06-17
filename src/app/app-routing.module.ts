import { ArticleListComponent } from "./articles/article-list/article-list.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateArticleComponent } from "./articles/create-article/create-article.component";

const routes: Routes = [
  { path: "", redirectTo: "/admin", pathMatch: "full" },
  {
    path: "admin",
    component: AdminPanelComponent
  },
  {
    path: "admin/signup",
    component: SignupComponent
  },
  {
    path: "admin/login",
    component: LoginComponent
  },
  {
    path: "admin/articles/create",
    component: CreateArticleComponent
  },
  {
    path: "admin/articles/list",
    component: ArticleListComponent
  },
  { path: "**", redirectTo: "/errorComponent" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
