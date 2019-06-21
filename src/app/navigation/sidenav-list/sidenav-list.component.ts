import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.scss"]
})
export class SidenavListComponent implements OnInit {
  @Output() onCloseEmitter = new EventEmitter<void>();

  @Output() logoutEmitter = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  // method closing sidenav.
  onClose(): void {
    this.onCloseEmitter.emit();
  }

  // method from admin-panel parent component to handle logout dialog, asking - is user sure to logout.
  onLogout() {
    this.logoutEmitter.next();
  }
}
