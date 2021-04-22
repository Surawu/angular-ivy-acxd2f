import { Component, OnInit, AfterViewInit } from "@angular/core";
import { MydemoService } from "../../mydemo.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit, AfterViewInit {
  public msg: any = "hi, this is ProductComponent";
  readonly Record: boolean = false;

  constructor(public demo: MydemoService) {
    demo.productInstance = this;
  }

  // 需要先切到 product tab，否则提示 Cannot read property 'msg' of undefined。 因为，此时 demo.productInstance = this; 未执行
  ngAfterViewInit(): void {
    this.demo.getNewsContainer();
    console.log(this.demo.productInstance.msg);

    resploop: for (
      var respSeg = 0;
      respSeg < 10;
      respSeg++ // Search for response
    ) {
      console.log("respSeg++++++" + respSeg);
      for (var respItem = 0; respItem < 2; respItem++) {
        console.log("respItem++++++" + respItem);
        if (respItem === 1) {
          break resploop; // only one responce after request is possible
        }
      }
    }
  }

  ngOnInit() {
    var canvas = document.getElementById("cdtGraphview");

    var canvas1 = document.getElementById("cdtGraphview");

    if (canvas === canvas1) {
      console.log("same");
    } else {
      console.log("not same");
    }
  }
  btnClick() {
    console.log(this.Record);
  }
}
