import { AuthService } from "./../auth.service";
import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  // we didnt use it yet - var. underneath.
  public username: string = "";
  public password: string = "";
  public nick: string = "";

  constructor(private router: Router, private authService: AuthService) {}

  // normal register without firebase auth - navigate to 241 site - ebook.

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password,
      nick: form.value.nick
    });

    // console.log(form.value.email, form.value.password);

    this.router.navigate(["login"]); //more about navigate method 241 at the bottom
    // this.router.navigate(["../"], { relativeTo: this.route }); //how to navigate to parent of current child- where we are. additionaly we need to inject route: Route from angular/router.
  }
}
