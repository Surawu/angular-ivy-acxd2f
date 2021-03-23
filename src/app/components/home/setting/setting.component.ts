import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.css"]
})
export class SettingComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  public name: string;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.name = params["name"];
    });
  }
}
