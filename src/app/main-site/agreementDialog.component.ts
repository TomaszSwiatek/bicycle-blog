import { MatDialog } from "@angular/material";
import { Component } from "@angular/core";

@Component({
  selector: "app-agreement-dialog",
  // we implement that mat-dialog-close binding to know what option ve chosen user
  template: `
    <h1 mat-dialog-title>Your Privacy</h1>
    <mat-dialog-content class="mat-typography">
      <p>
        We use cookies to improve your experience on our site and to show you
        personalised advertising.
      </p>
      <p>
        To find out more, read our
        <a routerLink="./privacy-policy"> privacy policy and cookie policy.</a>
      </p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">I'm OK with that</button>
    </mat-dialog-actions>
  `
})
export class AgreementDialogComponent {}
