import { Component, OnInit } from "@angular/core";
//实现效果自动延长
@Component({
  selector: "app-automatic-extension",
  templateUrl: "./automatic-extension.component.html",
  styleUrls: ["./automatic-extension.component.css"],
})
export class AutomaticExtensionComponent implements OnInit {
  width = "300px";
  constructor() {}

  ngOnInit() {}
  setwidth() {
    return this.width;
  }
}
