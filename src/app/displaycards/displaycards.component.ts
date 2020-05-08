import { Component, OnInit, OnDestroy } from "@angular/core";
import { SearchService } from "../search.service";
@Component({
  selector: "app-displaycards",
  templateUrl: "./displaycards.component.html",
  styleUrls: [ "./displaycards.component.css" ]
})
export class DisplaycardsComponent implements OnInit {
  ngOnInit() {}
  constructor(private s: SearchService) {
    var sreslt = [];
    sreslt = this.s.imageresults;
    console.log(sreslt);
  }
}
