/**
 * @fileoverview added by tsickle
 * Generated from: auto-textarea.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from "@angular/core";
var AutoTextareaComponent = /** @class */ (function () {
    function AutoTextareaComponent() {
        this.placeHolder = "请输入";
        this._maxlength = 200;
    }
    Object.defineProperty(AutoTextareaComponent.prototype, "maxlength", {
        get: /**
         * @return {?}
         */
        function () {
            return this._maxlength * 2;
        },
        set: /**
         * @param {?} length
         * @return {?}
         */
        function (length) {
            this._maxlength = length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AutoTextareaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    AutoTextareaComponent.prototype.onModelChange = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    AutoTextareaComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    AutoTextareaComponent.prototype.getLength = /**
     * @return {?}
     */
    function () { };
    AutoTextareaComponent.decorators = [
        { type: Component, args: [{
                    selector: "wx-auto-textarea",
                    template: "<div class=\"textareaBox\">\n    <div class=\"textareaFake\">{{value}}</div>\n    <textarea #textarea class=\"textarea\" [placeholder]=\"placeHolder\" [ngModel]=\"value\" (ngModelChange)=\"onModelChange()\" (blur)=\"onBlur()\"> </textarea>\n    <div class=\"count\" [class.isCount]=\"!isCount\" style=\"user-select: none;\">{{getLength()+'/'+maxlength}}</div>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AutoTextareaComponent.ctorParameters = function () { return []; };
    AutoTextareaComponent.propDecorators = {
        textarea: [{ type: ViewChild, args: ['textarea', { static: true },] }],
        isCount: [{ type: Input }],
        maxlength: [{ type: Input }],
        placeHolder: [{ type: Input }]
    };
    return AutoTextareaComponent;
}());
export { AutoTextareaComponent };
if (false) {
    /** @type {?} */
    AutoTextareaComponent.prototype.textarea;
    /** @type {?} */
    AutoTextareaComponent.prototype.value;
    /** @type {?} */
    AutoTextareaComponent.prototype.isCount;
    /** @type {?} */
    AutoTextareaComponent.prototype.placeHolder;
    /**
     * @type {?}
     * @private
     */
    AutoTextareaComponent.prototype._maxlength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZWZzb3VsL2NvbXBvbmVudHMvYXV0by10ZXh0YXJlYS8iLCJzb3VyY2VzIjpbImF1dG8tdGV4dGFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRjtJQWlCRTtRQUZTLGdCQUFXLEdBQUMsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBQyxHQUFHLENBQUM7SUFDUixDQUFDO0lBUmhCLHNCQUFhLDRDQUFTOzs7O1FBR3RCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7OztRQUxELFVBQXVCLE1BQU07WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7Ozs7SUFRRCx3Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7O0lBQ2IsNkNBQWE7OztJQUFiLGNBQWlCLENBQUM7Ozs7SUFDbEIsc0NBQU07OztJQUFOLGNBQVUsQ0FBQzs7OztJQUNYLHlDQUFTOzs7SUFBVCxjQUFhLENBQUM7O2dCQXRCZixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsMlhBQTZDOztpQkFFOUM7Ozs7OzJCQUVFLFNBQVMsU0FBQyxVQUFVLEVBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDOzBCQUVsQyxLQUFLOzRCQUNMLEtBQUs7OEJBTUwsS0FBSzs7SUFRUiw0QkFBQztDQUFBLEFBdkJELElBdUJDO1NBbEJZLHFCQUFxQjs7O0lBQ2hDLHlDQUF5RDs7SUFDekQsc0NBQU07O0lBQ04sd0NBQWlCOztJQU9qQiw0Q0FBMkI7Ozs7O0lBQzNCLDJDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInd4LWF1dG8tdGV4dGFyZWFcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hdXRvLXRleHRhcmVhLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9hdXRvLXRleHRhcmVhLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9UZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RleHRhcmVhJyx7c3RhdGljOnRydWV9KSB0ZXh0YXJlYTpFbGVtZW50UmVmO1xuICB2YWx1ZTsgLy/mlL7nva7lnKhkaXbph4zpnaLnmoR0ZXh0YXJlYeeahOWAvFxuICBASW5wdXQoKSBpc0NvdW50O1xuICBASW5wdXQoKSBzZXQgbWF4bGVuZ3RoKGxlbmd0aCkge1xuICAgIHRoaXMuX21heGxlbmd0aCA9IGxlbmd0aDtcbiAgfVxuICBnZXQgbWF4bGVuZ3RoKCl7XG4gICAgcmV0dXJuIHRoaXMuX21heGxlbmd0aCoyO1xuICB9XG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyPVwi6K+36L6T5YWlXCI7XG4gIHByaXZhdGUgX21heGxlbmd0aD0yMDA7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG4gIG9uTW9kZWxDaGFuZ2UoKSB7fVxuICBvbkJsdXIoKSB7fVxuICBnZXRMZW5ndGgoKSB7fVxufVxuIl19