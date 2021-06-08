import { Component, ViewChild, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: auto-textarea.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: auto-textarea.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutoTextAreaModule = /** @class */ (function () {
    function AutoTextAreaModule() {
    }
    AutoTextAreaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AutoTextareaComponent],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [AutoTextareaComponent],
                    entryComponents: [AutoTextareaComponent]
                },] }
    ];
    return AutoTextAreaModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: defsoul-components-auto-textarea.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AutoTextAreaModule, AutoTextareaComponent };
//# sourceMappingURL=defsoul-components-auto-textarea.js.map
