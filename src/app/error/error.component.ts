import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"]
})
export class ErrorComponent implements OnInit {
  delayTime: number = 7000;
  intervalProgressBar: number = 0; //binded to mat-progress-bar value.

  constructor(private router: Router) {
    // shows error component as many seconds as we define in delayTime variable, and then redirect to home page.
    setTimeout(() => router.navigate([""]), this.delayTime);
    // run progress bar untill will achive (value) equal to 100.
    setInterval(
      () => {
        this.intervalProgressBar <= 100
          ? (this.intervalProgressBar = this.intervalProgressBar + 1)
          : clearInterval();
      },
      //divide time that we can loop it 100 times. So this ternary operator above can run and end in same time. for example if delayTime = 5000, then delayTime/100 = 50 - so we call it *100 times before we clear interval, what equals to 5000 ms.
      this.delayTime / 100
    );
  }

  ngOnInit() {}
}
