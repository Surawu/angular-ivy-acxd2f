import { Component, OnInit, AfterViewInit } from "@angular/core";
import { MydemoService } from "../../mydemo.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit, AfterViewInit {
  constructor(public demo: MydemoService) {}

  ngAfterViewInit(): void {
    this.demo.getNewsContainer();
  }

  ngOnInit() {}
}
