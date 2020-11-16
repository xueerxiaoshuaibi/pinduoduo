import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-number",
  templateUrl: "./number.component.html",
  styleUrls: ["./number.component.css"],
})
export class NumberComponent implements OnInit {
  num;
  constructor() {}

  ngOnInit() {}
  valueChange() {
    var reg = /^(\-|\+)\d*(\.\d{0,2})?$/;
    var reg1 = /hello/;
    if (reg.test(this.num)) {
    } else {
      this.num = "";
      alert("请输入正确数字");
    }
  }
}
