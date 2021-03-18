import { Component, VERSION, AfterViewInit } from "@angular/core";
import { MydemoService } from "./mydemo.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  name = "Angular " + VERSION.major;
  constructor(public demo: MydemoService) {}

  ngAfterViewInit() {
    this.demo.getNewsContainer();
  }
}
