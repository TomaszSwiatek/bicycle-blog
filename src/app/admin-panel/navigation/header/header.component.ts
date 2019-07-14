import { Subscription } from "rxjs"; //we need this obj to unsubscribe.
import { AuthService } from "../../auth/auth.service";
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() onToggleSidenavEmitter = new EventEmitter<void>();
  @Output() logoutEmitter = new EventEmitter<void>();
  isAuth: boolean = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // add a subscription:
    this.authSubscription = this.authService.authChange.subscribe(
      authStatus => {
        //authStatus will be this data true or false got when we fire auth.service methods, where inside we emit authService.authChange.next(true/false).
        this.isAuth = authStatus; //create such var to store authStatus from subscribe, and then refer to template - to show/hide navigation elements.
      }
    );
  }
  ngOnDestroy(): void {
    //we need to unsubscribe subscription every time component is destroy, becouseof it we ve created this cycle hook and implement here unsubscribe:
    this.authSubscription.unsubscribe(); //this clears/releases uneeded memory.
  }
  onToggleSidenav(): void {
    this.onToggleSidenavEmitter.emit();
  }

  // method from admin-panel parent component to handle logout dialog, asking - is user sure to logout.
  onLogout() {
    this.logoutEmitter.next(); //comment it?
    this.authService.logout();
  }
  onLogin() {
    // this.authService.login(); //we have to add param, and end this
  }
}
