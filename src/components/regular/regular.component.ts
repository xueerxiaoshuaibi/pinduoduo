import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-regular",
  templateUrl: "./regular.component.html",
  styleUrls: ["./regular.component.css"],
})
export class RegularComponent implements OnInit {
  value;
  show = true;
  constructor() {}

  ngOnInit() {}
  blurNum() {
    var regu = /^(\-|\+)?\d+(\.\d+)?$/;
    if (!!this.value) {
      this.value = parseFloat(this.value);
      let val = this.value;
      if (!regu.test(val)) {
        this.getType("0");
      } else {
        this.getType("1");
      }
    }
  }

  getType(item) {
    if (item == "0") {
      this.show = false;
    } else if (item == "1") {
      this.show = true;
    }
    if (this.show) {
      return;
    } else {
      this.value = "";
    }
  }
}
