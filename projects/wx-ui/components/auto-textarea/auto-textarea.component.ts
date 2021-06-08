import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { stringByte } from "wx-ui/utils/validators";

@Component({
  selector: "wx-auto-textarea",
  templateUrl: "./auto-textarea.component.html",
  styleUrls: ["./auto-textarea.component.css"],
})
export class AutoTextareaComponent implements OnInit {
  @ViewChild('textarea',{static:true}) textarea:ElementRef;
  value; //放置在div里面的textarea的值
  @Input() isCount;
  @Input() set maxlength(length) {
    this._maxlength = length;
  }
  get maxlength(){
    return this._maxlength*2;
  }
  @Input() placeHolder="请输入";
  private _maxlength=200;
  constructor() {}

  ngOnInit() {}
  onModelChange(e) {
  console.log(this.value)
  }
  onBlur() {}
  getLength() {debugger
    return stringByte(this.value)
  }
}
