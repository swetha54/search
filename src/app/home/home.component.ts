import { Component, OnInit } from "@angular/core";
import { SearchService } from "../search.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ImageService } from "../image.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: [ "./home.component.css" ]
})
export class HomeComponent {
  iary = [];
  constructor(
    private search: SearchService,
    private route: ActivatedRoute,
    private router: Router,
    private is: ImageService
  ) {}
  svalue: string = "";
  //console.log("hai");

  getdetails(det: string) {
    console.log(det);
    if (det.length == 0) {
      alert("please type someting to search!");
    } else if (det.length > 0) {
      this.search.fetch(det).subscribe(x => {
        x["hits"].forEach(element => {
          this.iary.push(element);
          // console.log("length=" + this.iary.length);
        });
      });
      console.log(this.iary);
      //console.log("calling img Service" + this.iary + "is displayed");
      this.is.display(this.iary);
      this.router.navigate([ "/display", this.iary ], {
        relativeTo: this.route
      });
    }
  }
}
