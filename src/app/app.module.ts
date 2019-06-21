import { AuthService } from "./auth/auth.service";
import { MaterialModule } from "./material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ErrorComponent } from "./error/error.component";

import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [AppComponent, ErrorComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [AuthService], //we have to provide our auth service in whole app. this is important becouse we have to use only on instance of that service(component in real).
  bootstrap: [AppComponent]
})
export class AppModule {}
