import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"]
})
export class ErrorComponent implements OnInit {
  delayTime: number = 5000;

  intervalProgressBar = 0;

  constructor(private router: Router) {
    //shows 5 seconds error component, and then redirect to home page.
    setTimeout(() => router.navigate([""]), this.delayTime);
    setInterval(() => {
      this.intervalProgressBar <= 100
        ? (this.intervalProgressBar = this.intervalProgressBar + 1)
        : clearInterval();
    }, 50);
  }

  ngOnInit() {}
}
