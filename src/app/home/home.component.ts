import { Component, OnInit } from "@angular/core";
import { SearchService } from "../search.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: [ "./home.component.css" ]
})
export class HomeComponent {
  constructor(
    private search: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  svalue: string = "";
  getdetails(det: string) {
    console.log(det);
    this.search.fetch(det);
    this.router.navigate([ "/display" ], { relativeTo: this.route });
  }
}
