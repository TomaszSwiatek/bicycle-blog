import { LogoutDialogComponent } from "./../navigation/logout-dialog.component";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-admin-panel",
  templateUrl: "./admin-panel.component.html",
  styleUrls: ["./admin-panel.component.scss"]
})
export class AdminPanelComponent implements OnInit {
  tabLinks = [
    {
      path: "./loggedin/articles",
      label: "Articles"
    },
    {
      path: "./loggedin/create",
      label: "Create article"
    }
  ];

  constructor(private logoutDialog: MatDialog) {}

  ngOnInit() {}

  onLogout() {
    const dialogRef = this.logoutDialog.open(LogoutDialogComponent);

    //dialogref is reference to our event on logout button which listen when to open dialog. On this we fire this methods to get value true/false after user clicks - yes or no. (this data is binded in logoutDialogComponent - in template. )
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
