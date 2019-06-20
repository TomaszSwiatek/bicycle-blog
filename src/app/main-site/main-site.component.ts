import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-site",
  templateUrl: "./main-site.component.html",
  styleUrls: ["./main-site.component.scss"]
})
export class MainSiteComponent implements OnInit {
  tabLinks: [
    {
      path: "./";
      label: "Europe";
    },
    {
      path: "./";
      label: "Poland";
    }
  ];

  constructor() {}

  ngOnInit() {}
}
