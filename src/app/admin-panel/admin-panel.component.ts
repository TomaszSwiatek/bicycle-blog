import { LogoutDialogComponent } from "./../navigation/logout-dialog.component";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-admin-panel",
  templateUrl: "./admin-panel.component.html",
  styleUrls: ["./admin-panel.component.scss"]
})
export class AdminPanelComponent implements OnInit {
  // @Output() loggedOut = new EventEmitter();
  loggedOut: boolean;

  constructor(private logoutDialog: MatDialog) {}

  ngOnInit() {}

  onLogout() {
    const logoutDialogRef = this.logoutDialog.open(LogoutDialogComponent);

    //dialogref is reference to our event on logout button which listen when to open dialog. On this we fire this methods to get value true/false after user clicks - yes or no. (this data is binded in logoutDialogComponent - in template. )
    logoutDialogRef.afterClosed().subscribe(result => {
      console.log(result);

      if (result) {
        // so : result = true if we click yes in dialog - so what to do?
        // this.loggedOut.emit(); //we emit event when user rly want to logout
        // how to implement it if we directly go to admin panel by route?
        // maybe we can bind it to normal variable:
        this.loggedOut = true;
      } else {
        // what to do if user clicks no?
      }
    });
  }
}
