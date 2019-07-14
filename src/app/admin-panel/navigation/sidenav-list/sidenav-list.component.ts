import { AuthService } from "./../../../auth/auth.service";
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.scss"]
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() onCloseEmitter = new EventEmitter<void>();
  @Output() logoutEmitter = new EventEmitter<void>();

  isAuth: boolean = false;
  authSubscription: Subscription;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(
      authStatus => {
        this.isAuth = authStatus;
      }
    );
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.authSubscription.unsubscribe();
  }

  // method closing sidenav.
  onClose(): void {
    this.onCloseEmitter.emit();
  }

  // method from admin-panel parent component to handle logout dialog, asking - is user sure to logout.
  onLogout() {
    this.logoutEmitter.next(); //comment it?
    this.authService.logout();
    this.onClose(); //also close sidenav when clicked
  }
}
