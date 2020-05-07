import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchService } from "./search.service";
import { FormsModule } from "@angular/forms";
import { DisplaycardsComponent } from "./displaycards/displaycards.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "display", component: DisplaycardsComponent }
];
@NgModule({
  declarations: [ AppComponent, DisplaycardsComponent, HomeComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ SearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
