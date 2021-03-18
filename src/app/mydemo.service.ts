import { Injectable, ViewChild } from "@angular/core";
import { NewsComponent } from "./components/news/news.component";

@Injectable()
export class MydemoService {
  @ViewChild(NewsComponent, { static: false })
  viewChildOnRef: NewsComponent;
  constructor() {}

  getNewsContainer() {
    alert(this.viewChildOnRef.getContainer());
  }
}
