import { AdminRoutingModule } from "./admin-panel/admin-routing.module";
// import { AdminRoutingModule } from "./articles/articles-routing.module";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import material modules from external file:
import { MaterialModule } from "./material.module";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { CreateArticleComponent } from "./articles/create-article/create-article.component";
import { ArticleListComponent } from "./articles/article-list/article-list.component";
import { ErrorComponent } from "./error/error.component";
import { ArticleComponent } from "./articles/article/article.component";
import { MainSiteComponent } from "./main-site/main-site.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SidenavListComponent,
    HeaderComponent,
    AdminPanelComponent,
    CreateArticleComponent,
    ArticleListComponent,
    ErrorComponent,
    ArticleComponent,
    MainSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
    // AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
