/**
 * @fileoverview added by tsickle
 * Generated from: alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from "@angular/core";
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
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
    AlertComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.closeEvent.emit(true);
        this.hide = true;
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: "wx-alert",
                    template: "<div>123</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return []; };
    AlertComponent.propDecorators = {
        type: [{ type: Input }],
        showIcon: [{ type: Input }],
        closeable: [{ type: Input }],
        closeEvent: [{ type: Output }]
    };
    return AlertComponent;
}());
export { AlertComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGVmc291bC9hbGVydC8iLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJdkU7SUFlRTs7UUFSUyxTQUFJLEdBQWMsTUFBTSxDQUFDOztRQUV6QixhQUFRLEdBQUcsSUFBSSxDQUFDOztRQUVoQixjQUFTLEdBQUcsS0FBSyxDQUFDOztRQUVqQixlQUFVLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDMUUsU0FBSSxHQUFHLEtBQUssQ0FBQztJQUNFLENBQUM7Ozs7SUFFaEIsOEJBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsOEJBQXFDOztpQkFFdEM7Ozs7O3VCQUdFLEtBQUs7MkJBRUwsS0FBSzs0QkFFTCxLQUFLOzZCQUVMLE1BQU07O0lBUVQscUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSxjQUFjOzs7SUFFekIsOEJBQWtDOztJQUVsQyxrQ0FBeUI7O0lBRXpCLG1DQUEyQjs7SUFFM0Isb0NBQTBFOztJQUMxRSw4QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLy8g5a6a5LmJYWxlcnTmnInlk6rkupvlj6/pgInnsbvlnotcclxuZXhwb3J0IHR5cGUgQWxlcnRUeXBlID0gXCJzdWNjZXNzXCIgfCBcImRhbmdlclwiIHwgXCJ3YXJuaW5nXCIgfCBcImluZm9cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInd4LWFsZXJ0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9hbGVydC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9hbGVydC5jb21wb25lbnQuc2Nzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IHtcclxuICAvLyBBbGVydCDnsbvlnotcclxuICBASW5wdXQoKSB0eXBlOiBBbGVydFR5cGUgPSBcImluZm9cIjtcclxuICAvLyDmmK/lkKbmmL7npLrlm77moIfvvIznlKjkuo7mlK/mjIHnlKjmiLfoh6rlrprkuYnlm77moIdcclxuICBASW5wdXQoKSBzaG93SWNvbiA9IHRydWU7XHJcbiAgLy8g5piv5ZCm5Y+v5YWz6ZetXHJcbiAgQElucHV0KCkgY2xvc2VhYmxlID0gZmFsc2U7XHJcbiAgLy8g5YWz6Zet5Zue6LCDXHJcbiAgQE91dHB1dCgpIGNsb3NlRXZlbnQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBoaWRlID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuY2xvc2VFdmVudC5lbWl0KHRydWUpO1xyXG4gICAgdGhpcy5oaWRlID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19