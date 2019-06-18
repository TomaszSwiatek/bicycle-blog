import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { MainSiteComponent } from "./main-site/main-site.component";
import { ArticleComponent } from "./articles/article/article.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorComponent } from "./error/error.component";

const routes: Routes = [
  // { path: "", redirectTo: "/admin", pathMatch: "full" },
  {
    path: "",
    component: MainSiteComponent
  },
  {
    path: "admin",
    component: AdminPanelComponent
  },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
