import { Component, OnInit, AfterViewInit } from "@angular/core";
import { MydemoService } from "../../mydemo.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit, AfterViewInit {
  constructor(public demo: MydemoService) {}

  ngAfterViewInit(): void {
    this.demo.getNewsContainer();
  }

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
