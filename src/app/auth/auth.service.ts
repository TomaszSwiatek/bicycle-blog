import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs"; //something like event emitter but not for custom events.
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

// to be able to inject service into service we have to add inject decorator.
@Injectable() //without semicolon we have to add it becouse we add service (router ) to our own service.
export class AuthService {
  // we create new subject which can store payloads (rxjs)
  authChange = new Subject<boolean>();
  // we store created user
  private user: User;

  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString() //we re created fake id - which has to be universal before we connect to fb
    };
    this.authSuccessfully();
  }
  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString() //later we will change that logic to other
    };
    this.authSuccessfully();
  }
  logout() {
    this.user = null;
    this.authChange.next(false); //emitted event to know that someone is loggedout. AuthChange ll change value to false.
    this.router.navigate(["/admin/login"]);
  }

  //   to get access to user we have to create such a method:

  getUser() {
    return { ...this.user }; //we use spread operator to dont mutate data saved by user. so we work on copy.
  }
  //   method checkin is the user auth
  isAuth(): boolean {
    return this.user !== null;
  }
  //add method which ll be executed in other methods here - so we re doing private method:
  private authSuccessfully() {
    this.authChange.next(true); //emitted event to know that someone is loggedin. AuthChange ll change value to true.
    this.router.navigate(["/admin/manage"]);
  }
}
