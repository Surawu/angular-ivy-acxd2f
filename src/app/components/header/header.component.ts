import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public title: string = "i am header";
  public h: string = "<h2>这是一个h2 用[innerHTML]来解析</h2>";

  public id: any = "123";
  public list: string[] = [];
  public source: any = "1";

  public inputValue: string = "hi";
  public flag: boolean = true;

  public classStyler: any;

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

  public cars: any[] = [
    {
      cate: "BWM",
      list: [
        {
          title: "x1"
        },
        {
          title: "x2"
        },
        {
          title: "x3"
        }
      ]
    },
    {
      cate: "AuDi",
      list: [
        {
          title: "Q1"
        },
        {
          title: "Q2"
        },
        {
          title: "Q3"
        }
      ]
    }
  ];

  constructor() {
    this.list.push("a");
    this.list.push("b");
    this.list.push("v");
    this.list.push("d");
  }

  ngOnInit() {
    this.classStyler = {
      warning: false,
      info: false,
      error: !this.flag,
      success: this.flag
    };
  }

  getData() {
    console.log(this.title);
  }

  setData() {
    this.title = "changed title";
  }

  keyUpFn(e) {
    console.log(e.key);
  }

  updateTos(e) {
    console.log(e);
  }

  updateUsage(e) {
    console.log(e);
  }
}
