(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('defsoul/alert', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.defsoul = global.defsoul || {}, global.defsoul.alert = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: alert.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
            // Alert 类型
            this.type = "info";
            // 是否显示图标，用于支持用户自定义图标
            this.showIcon = true;
            // 是否可关闭
            this.closeable = false;
            // 关闭回调
            this.closeEvent = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: "wx-alert",
                        template: "<div>test</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AlertComponent.ctorParameters = function () { return []; };
        AlertComponent.propDecorators = {
            type: [{ type: core.Input }],
            showIcon: [{ type: core.Input }],
            closeable: [{ type: core.Input }],
            closeEvent: [{ type: core.Output }]
        };
        return AlertComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: alert.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        AlertModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [AlertComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [AlertComponent]
                    },] }
        ];
        return AlertModule;
    }());

    exports.AlertComponent = AlertComponent;
    exports.AlertModule = AlertModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=defsoul-alert.umd.js.map
