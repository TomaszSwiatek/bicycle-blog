import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() onToggleSidenavEmitter = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}
  onToggleSidenav(): void {
    this.onToggleSidenavEmitter.emit();
  }
}
