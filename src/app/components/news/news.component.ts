import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  public list: string[] = ["a", "b", "c"];

  @ViewChild("footer") footer: any;

  @ViewChild("container") container: any;

  public title1: string = "hi";

  constructor() {}

  ngOnInit() {}

  getFooterMsg() {
    alert(this.footer.msg);
  }

  getContainer() {
    alert(this.container);
  }
}
