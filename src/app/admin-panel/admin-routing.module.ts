import { AuthGuard } from "./auth/auth.guard";
import { ManageArticlesComponent } from "./manage-articles/manage-articles.component";
import { ArticleListComponent } from "./manage-articles/article-list/article-list.component";
import { CreateArticleComponent } from "./manage-articles/create-article/create-article.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { AdminPanelComponent } from "./admin-panel.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const adminRoutes: Routes = [
  {
    path: "",
    component: AdminPanelComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      {
        path: "manage",
        component: ManageArticlesComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: "create",
            component: CreateArticleComponent
          },
          {
            path: "articles",
            component: ArticleListComponent
          }
        ]
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "signup",
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AdminRoutingModule {}
