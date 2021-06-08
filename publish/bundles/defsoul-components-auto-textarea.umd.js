(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('defsoul/components/auto-textarea', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory((global.defsoul = global.defsoul || {}, global.defsoul.components = global.defsoul.components || {}, global.defsoul.components['auto-textarea'] = {}), global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, core, forms, common) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: "wx-auto-textarea",
                        template: "<div class=\"textareaBox\">\n    <div class=\"textareaFake\">{{value}}</div>\n    <textarea #textarea class=\"textarea\" [placeholder]=\"placeHolder\" [ngModel]=\"value\" (ngModelChange)=\"onModelChange()\" (blur)=\"onBlur()\"> </textarea>\n    <div class=\"count\" [class.isCount]=\"!isCount\" style=\"user-select: none;\">{{getLength()+'/'+maxlength}}</div>\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AutoTextareaComponent.ctorParameters = function () { return []; };
        AutoTextareaComponent.propDecorators = {
            textarea: [{ type: core.ViewChild, args: ['textarea', { static: true },] }],
            isCount: [{ type: core.Input }],
            maxlength: [{ type: core.Input }],
            placeHolder: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: [AutoTextareaComponent],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
                        ],
                        exports: [AutoTextareaComponent],
                        entryComponents: [AutoTextareaComponent]
                    },] }
        ];
        return AutoTextAreaModule;
    }());

    exports.AutoTextAreaModule = AutoTextAreaModule;
    exports.AutoTextareaComponent = AutoTextareaComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=defsoul-components-auto-textarea.umd.js.map
