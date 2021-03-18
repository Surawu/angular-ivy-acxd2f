import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public pictureUrl: string = "PCpad_012830ebaa7e4379ce9a9ed1b71f7507.png";

  public flag: boolean = false;
  public attr: any = "red";

  public userList: any[] = [
    {
      username: "zhangsan",
      age: 20
    },
    {
      username: "lisi",
      age: 21
    },
    {
      username: "wangwu",
      age: 25
    }
  ];

  constructor() {}

  ngOnInit() {}

  runEvent(event) {
    let dom: any = event.target;
    dom.style.color = "red";
  }
}
