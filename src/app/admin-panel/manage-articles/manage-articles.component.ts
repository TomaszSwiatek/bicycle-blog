import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-manage-articles",
  templateUrl: "./manage-articles.component.html",
  styleUrls: ["./manage-articles.component.scss"]
})
export class ManageArticlesComponent implements OnInit {
  tabLinks = [
    {
      path: "./articles",
      label: "Articles"
    },
    {
      path: "./create",
      label: "Create article"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
