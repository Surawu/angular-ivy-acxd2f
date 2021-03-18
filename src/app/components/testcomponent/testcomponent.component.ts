import { Component, OnInit, ContentChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-testcomponent",
  templateUrl: "./testcomponent.component.html",
  styleUrls: ["./testcomponent.component.css"]
})
export class TestcomponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  hello() {
    console.log("Hello ABC");
  }
}
