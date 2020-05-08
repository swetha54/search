import { Component, OnInit, OnDestroy } from "@angular/core";
import { SearchService } from "../search.service";
@Component({
  selector: "app-displaycards",
  templateUrl: "./displaycards.component.html",
  styleUrls: [ "./displaycards.component.css" ]
})
export class DisplaycardsComponent implements OnInit, OnDestroy {
  sreslt = [];

  constructor(private s: SearchService) {
    this.sreslt = this.s.imageresults;
    console.log(this.sreslt);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.sreslt = [];
  }
}
