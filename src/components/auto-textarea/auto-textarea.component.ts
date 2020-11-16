import { Component, OnInit, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "app-auto-textarea",
  templateUrl: "./auto-textarea.component.html",
  styleUrls: ["./auto-textarea.component.less"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoTextareaComponent),
      multi: true,
    },
  ],
})
export class AutoTextareaComponent implements ControlValueAccessor, OnInit {
  constructor() {}
  value;
  ngOnInit() {}
  onModelChange(e) {}
  //写值
  writeValue() {}
  registerOnChange() {}
  registerOnTouched() {}
}
