import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
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
