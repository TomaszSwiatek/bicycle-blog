import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-site-article-list",
  templateUrl: "./main-site-article-list.component.html",
  styleUrls: ["./main-site-article-list.component.scss"]
})
export class MainSiteArticleListComponent implements OnInit {
  articles = [
    {
      id: "1",
      title: "Sit amet.",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, cupiditate.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nemo ducimus obcaecati sint ipsam ad, neque esse reiciendis ratione aperiam? Nemo architecto itaque qui, fugit assumenda sequi id aspernatur voluptas?",
      src:
        "https://cdn.pixabay.com/photo/2016/09/13/09/08/bicycle-path-1666762_960_720.jpg",
      likes: 0,
      isAlreadyLiked: false
    },
    {
      id: "2",
      title: "Lorem ipsum",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, cupiditate.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, dolorum expedita? Aspernatur harum, incidunt nostrum architecto a voluptates cum, corrupti accusantium eum quia excepturi molestias rerum deserunt quam consequatur magni.",
      src:
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821_960_720.jpg",
      likes: 0,
      isAlreadyLiked: false
    },
    {
      id: "3",
      title: " consectetur adipisicing elit.",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, cupiditate.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, quod blanditiis nam porro sequi dolor unde voluptatum cum quas pariatur obcaecati quam delectus ducimus ipsa vero, quo soluta voluptatibus minus?",
      src:
        "https://cdn.pixabay.com/photo/2018/11/19/20/35/vineyards-3826010_960_720.jpg",
      likes: 0,
      isAlreadyLiked: false
    },
    {
      id: "4",
      title: " adipisicing elit.",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, cupiditate.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, quod blanditiis nam porro sequi dolor unde voluptatum cum quas pariatur obcaecati quam delectus ducimus ipsa vero, quo soluta voluptatibus minus?",
      src:
        "https://cdn.pixabay.com/photo/2016/11/29/03/25/bicycle-1867046_960_720.jpg",
      likes: 0,
      isAlreadyLiked: false
    },
    {
      id: "5",
      title: "Lorem ipsum dolor.",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, cupiditate.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, quod blanditiis nam porro sequi dolor unde voluptatum cum quas pariatur obcaecati quam delectus ducimus ipsa vero, quo soluta voluptatibus minus?",
      src:
        "https://cdn.pixabay.com/photo/2015/12/08/00/48/vintage-1082057_960_720.jpg",
      likes: 0,
      isAlreadyLiked: false
    },
    {
      id: "6",
      title: "consectetur adipisicing elit.",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, cupiditate.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, quod blanditiis nam porro sequi dolor unde voluptatum cum quas pariatur obcaecati quam delectus ducimus ipsa vero, quo soluta voluptatibus minus?",
      src:
        "https://cdn.pixabay.com/photo/2016/11/19/12/24/bicycle-1839005_960_720.jpg",
      likes: 0,
      isAlreadyLiked: false
    }
  ];

  handleLikeArticle(index) {
    //add to counter +1. Counter is binded to content on site.
    this.articles[index].likes++;
    // hide after first like-click
    this.articles[index].isAlreadyLiked = true;
  }

  constructor() {}

  ngOnInit() {}
}
