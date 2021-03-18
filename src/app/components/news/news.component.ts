import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MydemoService } from "../../mydemo.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit, AfterViewInit {
  public list: string[] = ["a", "b", "c"];

  @ViewChild("footer") footer: any;

  @ViewChild("container") container: any;

  public title1: string = "hi";

  constructor(public demo: MydemoService) {}
// 需要先切到 product tab，否则提示 Cannot read property 'msg' of undefined。 因为，此时 demo.productInstance = this; 未执行
  ngAfterViewInit(): void {
    this.demo.getNewsContainer();
    console.log(this.demo.productInstance.msg);
  }

  ngOnInit() {}

  getFooterMsg() {
    alert(this.footer.msg);
  }

  getContainer() {}
}
