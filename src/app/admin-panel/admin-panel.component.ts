import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-panel",
  templateUrl: "./admin-panel.component.html",
  styleUrls: ["./admin-panel.component.scss"]
})
export class AdminPanelComponent implements OnInit {
  tabLinks = [
    {
      path: "articles/list",
      label: "Articles"
    },
    {
      path: "articles/create",
      label: "Create article"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
