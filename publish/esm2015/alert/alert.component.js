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
                template: "<div>test</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGVmc291bC9hbGVydC8iLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTdkUsTUFBTSxPQUFPLGNBQWM7SUFVekI7O1FBUlMsU0FBSSxHQUFjLE1BQU0sQ0FBQzs7UUFFekIsYUFBUSxHQUFHLElBQUksQ0FBQzs7UUFFaEIsY0FBUyxHQUFHLEtBQUssQ0FBQzs7UUFFakIsZUFBVSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzFFLFNBQUksR0FBRyxLQUFLLENBQUM7SUFDRSxDQUFDOzs7O0lBRWhCLEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiwyQkFBcUM7O2FBRXRDOzs7OzttQkFHRSxLQUFLO3VCQUVMLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxNQUFNOzs7O0lBTlAsOEJBQWtDOztJQUVsQyxrQ0FBeUI7O0lBRXpCLG1DQUEyQjs7SUFFM0Isb0NBQTBFOztJQUMxRSw4QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vIOWumuS5iWFsZXJ05pyJ5ZOq5Lqb5Y+v6YCJ57G75Z6LXG5leHBvcnQgdHlwZSBBbGVydFR5cGUgPSBcInN1Y2Nlc3NcIiB8IFwiZGFuZ2VyXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwid3gtYWxlcnRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hbGVydC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYWxlcnQuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IHtcbiAgLy8gQWxlcnQg57G75Z6LXG4gIEBJbnB1dCgpIHR5cGU6IEFsZXJ0VHlwZSA9IFwiaW5mb1wiO1xuICAvLyDmmK/lkKbmmL7npLrlm77moIfvvIznlKjkuo7mlK/mjIHnlKjmiLfoh6rlrprkuYnlm77moIdcbiAgQElucHV0KCkgc2hvd0ljb24gPSB0cnVlO1xuICAvLyDmmK/lkKblj6/lhbPpl61cbiAgQElucHV0KCkgY2xvc2VhYmxlID0gZmFsc2U7XG4gIC8vIOWFs+mXreWbnuiwg1xuICBAT3V0cHV0KCkgY2xvc2VFdmVudDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBoaWRlID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmNsb3NlRXZlbnQuZW1pdCh0cnVlKTtcbiAgICB0aGlzLmhpZGUgPSB0cnVlO1xuICB9XG59XG4iXX0=