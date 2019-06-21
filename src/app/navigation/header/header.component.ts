import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() onToggleSidenavEmitter = new EventEmitter<void>();

  @Output() logoutEmitter = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
  onToggleSidenav(): void {
    this.onToggleSidenavEmitter.emit();
  }

  // method from admin-panel parent component to handle logout dialog, asking - is user sure to logout.
  onLogout() {
    this.logoutEmitter.next();
  }
}
