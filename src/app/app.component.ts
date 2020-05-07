import { Component } from "@angular/core";
import { SearchService } from "./search.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
})
export class AppComponent {
  title = "wikisearch";
  svalue: string = "";
  constructor(
    private search: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  getdetails() {
    if (this.svalue != "") {
      this.search.fetch(this.svalue);
    }
  }
  display() {
    this.router.navigate([ "/display" ], { relativeTo: this.route });
  }
}
