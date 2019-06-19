import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { MainSiteComponent } from "./main-site/main-site.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorComponent } from "./error/error.component";

const routes: Routes = [
  // { path: "", redirectTo: "/admin", pathMatch: "full" },
  {
    path: "",
    loadChildren: () =>
      import("./main-site/main-site.module").then(mod => mod.MainSiteModule)
    // component: MainSiteComponent
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin-panel/admin-panel.module").then(
        mod => mod.AdminPanelModule
      )
    // component: AdminPanelComponent
  },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
