import { AgreementDialogComponent } from "./agreementDialog.component";
import { ArticleComponent } from "./article/article.component";
import { MainSiteRoutingModule } from "./main-site-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainSiteComponent } from "./main-site.component";
import { MainSiteArticleListComponent } from "./main-site-article-list/main-site-article-list.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./../material.module";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

@NgModule({
  imports: [
    CommonModule,
    MainSiteRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    MainSiteComponent,
    ArticleComponent,
    MainSiteArticleListComponent,
    PrivacyPolicyComponent,
    AgreementDialogComponent
  ],
  entryComponents: [AgreementDialogComponent]
})
export class MainSiteModule {}
