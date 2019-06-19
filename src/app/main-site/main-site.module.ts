import { ArticleComponent } from "./../articles/article/article.component";
import { MainSiteRoutingModule } from "./main-site-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainSiteComponent } from "./main-site.component";

@NgModule({
  imports: [CommonModule, MainSiteRoutingModule],
  declarations: [MainSiteComponent, ArticleComponent]
})
export class MainSiteModule {}
