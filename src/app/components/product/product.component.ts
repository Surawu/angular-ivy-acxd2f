import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var canvas = document.getElementById("cdtGraphview");

    var canvas1 = document.getElementById("cdtGraphview");

    if (canvas === canvas1) {
      console.log("same");
    } else {
      console.log("not same");
    }
  }
}
