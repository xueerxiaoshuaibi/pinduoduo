import { Component, EventEmitter, Input, Output } from "@angular/core";
// 定义alert有哪些可选类型
export type AlertType = "success" | "danger" | "warning" | "info";

@Component({
  selector: "wx-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent {
  // Alert 类型
  @Input() type: AlertType = "info";
  // 是否显示图标，用于支持用户自定义图标
  @Input() showIcon = true;
  // 是否可关闭
  @Input() closeable = false;
  // 关闭回调
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  hide = false;
  constructor() {}

  close() {
    this.closeEvent.emit(true);
    this.hide = true;
  }
}
