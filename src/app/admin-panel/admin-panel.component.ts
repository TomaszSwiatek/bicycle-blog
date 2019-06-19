import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit() {}
}
