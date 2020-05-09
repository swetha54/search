import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  imgary = [];
  constructor() {}
  display(ary) {
    this.imgary = ary;
    console.log("inside display");
    console.log(this.imgary);
  }
}
