/**
 * @fileoverview added by tsickle
 * Generated from: auto-textarea.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from "@angular/core";
export class AutoTextareaComponent {
    constructor() {
        this.placeHolder = "请输入";
        this._maxlength = 200;
    }
    /**
     * @param {?} length
     * @return {?}
     */
    set maxlength(length) {
        this._maxlength = length;
    }
    /**
     * @return {?}
     */
    get maxlength() {
        return this._maxlength * 2;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    onModelChange() { }
    /**
     * @return {?}
     */
    onBlur() { }
    /**
     * @return {?}
     */
    getLength() { }
}
AutoTextareaComponent.decorators = [
    { type: Component, args: [{
                selector: "wx-auto-textarea",
                template: "<div class=\"textareaBox\">\n    <div class=\"textareaFake\">{{value}}</div>\n    <textarea #textarea class=\"textarea\" [placeholder]=\"placeHolder\" [ngModel]=\"value\" (ngModelChange)=\"onModelChange()\" (blur)=\"onBlur()\"> </textarea>\n    <div class=\"count\" [class.isCount]=\"!isCount\" style=\"user-select: none;\">{{getLength()+'/'+maxlength}}</div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
AutoTextareaComponent.ctorParameters = () => [];
AutoTextareaComponent.propDecorators = {
    textarea: [{ type: ViewChild, args: ['textarea', { static: true },] }],
    isCount: [{ type: Input }],
    maxlength: [{ type: Input }],
    placeHolder: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZWZzb3VsL2NvbXBvbmVudHMvYXV0by10ZXh0YXJlYS8iLCJzb3VyY2VzIjpbImF1dG8tdGV4dGFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9oRixNQUFNLE9BQU8scUJBQXFCO0lBWWhDO1FBRlMsZ0JBQVcsR0FBQyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFDLEdBQUcsQ0FBQztJQUNSLENBQUM7Ozs7O0lBUmhCLElBQWEsU0FBUyxDQUFDLE1BQU07UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUtELFFBQVEsS0FBSSxDQUFDOzs7O0lBQ2IsYUFBYSxLQUFJLENBQUM7Ozs7SUFDbEIsTUFBTSxLQUFJLENBQUM7Ozs7SUFDWCxTQUFTLEtBQUksQ0FBQzs7O1lBdEJmLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QiwyWEFBNkM7O2FBRTlDOzs7Ozt1QkFFRSxTQUFTLFNBQUMsVUFBVSxFQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQztzQkFFbEMsS0FBSzt3QkFDTCxLQUFLOzBCQU1MLEtBQUs7Ozs7SUFUTix5Q0FBeUQ7O0lBQ3pELHNDQUFNOztJQUNOLHdDQUFpQjs7SUFPakIsNENBQTJCOzs7OztJQUMzQiwyQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ3eC1hdXRvLXRleHRhcmVhXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXV0by10ZXh0YXJlYS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYXV0by10ZXh0YXJlYS5jb21wb25lbnQuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvVGV4dGFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCd0ZXh0YXJlYScse3N0YXRpYzp0cnVlfSkgdGV4dGFyZWE6RWxlbWVudFJlZjtcbiAgdmFsdWU7IC8v5pS+572u5ZyoZGl26YeM6Z2i55qEdGV4dGFyZWHnmoTlgLxcbiAgQElucHV0KCkgaXNDb3VudDtcbiAgQElucHV0KCkgc2V0IG1heGxlbmd0aChsZW5ndGgpIHtcbiAgICB0aGlzLl9tYXhsZW5ndGggPSBsZW5ndGg7XG4gIH1cbiAgZ2V0IG1heGxlbmd0aCgpe1xuICAgIHJldHVybiB0aGlzLl9tYXhsZW5ndGgqMjtcbiAgfVxuICBASW5wdXQoKSBwbGFjZUhvbGRlcj1cIuivt+i+k+WFpVwiO1xuICBwcml2YXRlIF9tYXhsZW5ndGg9MjAwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuICBvbk1vZGVsQ2hhbmdlKCkge31cbiAgb25CbHVyKCkge31cbiAgZ2V0TGVuZ3RoKCkge31cbn1cbiJdfQ==