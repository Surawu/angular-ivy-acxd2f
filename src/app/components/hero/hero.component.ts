import { Component, OnInit, AfterViewInit } from "@angular/core";
import { MydemoService } from "../../mydemo.service";

@Component({
  selector: "app-hero",
  //templateUrl: "./hero.component.html",
  template: "<h1>{{title}}</h1>",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit, AfterViewInit {
  constructor(public demo: MydemoService) {}
  title: string = "h1";
  ngAfterViewInit(): void {
    let user = {
      name: "Dzon",
      age: 25,
      address: "Sunny street 34"
    };

    let updatedUser = {
      ...user,
      name: "Peter",
      id: 10
    };
    console.log(updatedUser.id);
    user = null;
    console.log(updatedUser.name);
    this.demo.getNewsContainer();
  }

  ngOnInit() {}
}
