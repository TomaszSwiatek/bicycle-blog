import { LogoutDialogComponent } from "./../navigation/logout-dialog.component";
import { MaterialModule } from "./../material.module";
import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";

import { CommonModule } from "@angular/common";

import { ArticleListComponent } from "./manage-articles/article-list/article-list.component";
import { CreateArticleComponent } from "./manage-articles/create-article/create-article.component";
import { SignupComponent } from "./../auth/signup/signup.component";
import { LoginComponent } from "./../auth/login/login.component";
import { AdminPanelComponent } from "./admin-panel.component";

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { SidenavListComponent } from "./../navigation/sidenav-list/sidenav-list.component";
import { HeaderComponent } from "./../navigation/header/header.component";
import { ManageArticlesComponent } from "./manage-articles/manage-articles.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [
    ArticleListComponent,
    CreateArticleComponent,
    SignupComponent,
    LoginComponent,
    AdminPanelComponent,
    SidenavListComponent,
    HeaderComponent,
    LogoutDialogComponent,
    ManageArticlesComponent
  ],
  entryComponents: [LogoutDialogComponent]
})
export class AdminPanelModule {}
