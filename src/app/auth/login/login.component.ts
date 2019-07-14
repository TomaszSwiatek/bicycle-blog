import { AuthService } from "./../auth.service";
import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}
  onLogin(form: NgForm) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });

    // console.log(form.value.email, form.value.password);
    this.router.navigate(["admin/manage"]);
  }
}
