import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class SearchService {
  imageresults: any[] = [];
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  public fetch(input: string) {
    const result = this.http
      .get("https://pixabay.com/api/?key=16406559-92f8dd16f3b35409dbf837143", {
        params: {
          q: input,
          image_type: "photo",
          safesearch: "true",
          order: "popular"
        }
      })
      .subscribe(x => {
        x["hits"].forEach(element => {
          this.imageresults.push(element);
        });
      });
    // console.log("inside service" + input);
    //console.log(this.imageresults);
    this.router.navigate([ "/display" ]);
  }
  ngOnDestroy() {
    this.imageresults = [];
  }
}

// https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Nelson%20Mandela&utf8=&format=json

//https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Mahatma%20Gandi&utf8=&format=json

//https://pixabay.com/api/?key=16406559-92f8dd16f3b35409dbf837143&q=yellow+flowers&image_type=photo
