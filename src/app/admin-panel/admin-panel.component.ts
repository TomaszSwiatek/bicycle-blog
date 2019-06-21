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
    this.logoutDialog.open(LogoutDialogComponent);
  }
}
