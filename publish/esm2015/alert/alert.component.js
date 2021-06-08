/**
 * @fileoverview added by tsickle
 * Generated from: alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from "@angular/core";
export class AlertComponent {
    constructor() {
        // Alert 类型
        this.type = "info";
        // 是否显示图标，用于支持用户自定义图标
        this.showIcon = true;
        // 是否可关闭
        this.closeable = false;
        // 关闭回调
        this.closeEvent = new EventEmitter();
        this.hide = false;
    }
    /**
     * @return {?}
     */
    close() {
        this.closeEvent.emit(true);
        this.hide = true;
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: "wx-alert",
                template: "<div>123</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    type: [{ type: Input }],
    showIcon: [{ type: Input }],
    closeable: [{ type: Input }],
    closeEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AlertComponent.prototype.type;
    /** @type {?} */
    AlertComponent.prototype.showIcon;
    /** @type {?} */
    AlertComponent.prototype.closeable;
    /** @type {?} */
    AlertComponent.prototype.closeEvent;
    /** @type {?} */
    AlertComponent.prototype.hide;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGVmc291bC9hbGVydC8iLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTdkUsTUFBTSxPQUFPLGNBQWM7SUFVekI7O1FBUlMsU0FBSSxHQUFjLE1BQU0sQ0FBQzs7UUFFekIsYUFBUSxHQUFHLElBQUksQ0FBQzs7UUFFaEIsY0FBUyxHQUFHLEtBQUssQ0FBQzs7UUFFakIsZUFBVSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzFFLFNBQUksR0FBRyxLQUFLLENBQUM7SUFDRSxDQUFDOzs7O0lBRWhCLEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw4QkFBcUM7O2FBRXRDOzs7OzttQkFHRSxLQUFLO3VCQUVMLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxNQUFNOzs7O0lBTlAsOEJBQWtDOztJQUVsQyxrQ0FBeUI7O0lBRXpCLG1DQUEyQjs7SUFFM0Isb0NBQTBFOztJQUMxRSw4QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLy8g5a6a5LmJYWxlcnTmnInlk6rkupvlj6/pgInnsbvlnotcclxuZXhwb3J0IHR5cGUgQWxlcnRUeXBlID0gXCJzdWNjZXNzXCIgfCBcImRhbmdlclwiIHwgXCJ3YXJuaW5nXCIgfCBcImluZm9cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInd4LWFsZXJ0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9hbGVydC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9hbGVydC5jb21wb25lbnQuc2Nzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IHtcclxuICAvLyBBbGVydCDnsbvlnotcclxuICBASW5wdXQoKSB0eXBlOiBBbGVydFR5cGUgPSBcImluZm9cIjtcclxuICAvLyDmmK/lkKbmmL7npLrlm77moIfvvIznlKjkuo7mlK/mjIHnlKjmiLfoh6rlrprkuYnlm77moIdcclxuICBASW5wdXQoKSBzaG93SWNvbiA9IHRydWU7XHJcbiAgLy8g5piv5ZCm5Y+v5YWz6ZetXHJcbiAgQElucHV0KCkgY2xvc2VhYmxlID0gZmFsc2U7XHJcbiAgLy8g5YWz6Zet5Zue6LCDXHJcbiAgQE91dHB1dCgpIGNsb3NlRXZlbnQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBoaWRlID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuY2xvc2VFdmVudC5lbWl0KHRydWUpO1xyXG4gICAgdGhpcy5oaWRlID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19