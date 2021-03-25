import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-newscontent",
  templateUrl: "./newscontent.component.html",
  styleUrls: ["./newscontent.component.css"]
})
interface obj {
  a: string;
  b: number;
}
type readony1 = Readonly<obj>;
export class NewscontentComponent implements OnInit {
  @Input() title: any;

  public msg: string = "I'm msg from NewscontentComponent";

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.queryParams);

    this.route.queryParams.subscribe(data => {
      console.log(data);
    });
  }
}
