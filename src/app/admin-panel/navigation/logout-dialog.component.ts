import { MatDialog } from "@angular/material";
import { Component } from "@angular/core";

@Component({
  selector: "app-logout-dialog",
  // we implement that mat-dialog-close binding to know what option ve chosen user
  template: `
    <h1 mat-dialog-title>Are you sure?</h1>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Yes</button>
      <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>
  `
})
export class LogoutDialogComponent {}
