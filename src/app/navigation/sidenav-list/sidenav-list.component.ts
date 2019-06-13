import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.scss"]
})
export class SidenavListComponent implements OnInit {
  @Output() onCloseEmitter = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClose(): void {
    this.onCloseEmitter.emit();
  }
}
