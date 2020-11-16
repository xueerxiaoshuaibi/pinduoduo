import { Component, OnInit, AfterViewInit } from "@angular/core";
import { UpLoaderService } from "./service/up-loader.service";
// import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("这里是断点测试");
  }
}
