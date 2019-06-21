import { MatDialog } from "@angular/material";
import { Component } from "@angular/core";

@Component({
  selector: "app-logout-dialog",
  template: `
    <h1 mat-dialog-title>Are you sure?</h1>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Yes</button>
      <button mat-button mat-dialog-close>No</button>
    </mat-dialog-actions>
  `
})
export class LogoutDialogComponent {}
