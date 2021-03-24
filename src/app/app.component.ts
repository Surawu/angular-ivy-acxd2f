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
    let results = [10, 12, 14];
    let newNumbers = [...results, 45, 56];

    newNumbers.forEach(i => console.log(i));
  }
}
