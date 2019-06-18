import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-site",
  templateUrl: "./main-site.component.html",
  styleUrls: ["./main-site.component.scss"]
})
export class MainSiteComponent implements OnInit {
  articles = [
    {
      id: "1",
      h1: "Lorem ipsum dolor sit amet.",
      p:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nemo ducimus obcaecati sint ipsam ad, neque esse reiciendis ratione aperiam? Nemo architecto itaque qui, fugit assumenda sequi id aspernatur voluptas?"
    },
    {
      id: "2",
      h1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque.",
      p:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, dolorum expedita? Aspernatur harum, incidunt nostrum architecto a voluptates cum, corrupti accusantium eum quia excepturi molestias rerum deserunt quam consequatur magni."
    },
    {
      id: "3",
      h1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      p:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, quod blanditiis nam porro sequi dolor unde voluptatum cum quas pariatur obcaecati quam delectus ducimus ipsa vero, quo soluta voluptatibus minus?"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
