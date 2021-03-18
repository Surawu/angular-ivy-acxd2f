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

  ngAfterViewInit(): void {
    this.demo.getNewsContainer();
  }

  ngOnInit() {}

  getFooterMsg() {
    alert(this.footer.msg);
  }

  getContainer() {}
}
