import { Component, OnInit, OnDestroy } from "@angular/core";
import { SearchService } from "../search.service";
import { ImageService } from "../image.service";
@Component({
  selector: "app-displaycards",
  templateUrl: "./displaycards.component.html",
  styleUrls: [ "./displaycards.component.css" ]
})
export class DisplaycardsComponent implements OnInit {
  sreslt = [];

  constructor(private s: SearchService, private is: ImageService) {}

  ngOnInit() {
    console.log("inisde oninint");
    console.log(this.is.imgary);
    //if (this.is.imgary.length > 0) {
    console.log("inside if");
    console.log(this.is.imgary);
    this.sreslt = this.is.imgary;
    console.log(this.sreslt);
    //}
  }
}
