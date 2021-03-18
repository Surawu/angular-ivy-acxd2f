import { Injectable, ViewChild } from "@angular/core";

@Injectable()
export class MydemoService {
  constructor() {
    MydemoService.count++;
  }

  private static count = 0;

  getNewsContainer() {
    console.log("++++ " + MydemoService.count);
  }
}
