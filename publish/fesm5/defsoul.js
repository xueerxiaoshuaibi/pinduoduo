import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: alert/alert.component.ts
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
                    template: "<div>test</div>",
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
 * Generated from: alert/alert.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AlertComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [AlertComponent]
                },] }
    ];
    return AlertModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: my-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyLibModule = /** @class */ (function () {
    function MyLibModule() {
    }
    MyLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [AlertModule],
                    providers: [],
                    declarations: [],
                },] }
    ];
    return MyLibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: defsoul.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MyLibModule, AlertModule as ɵa, AlertComponent as ɵb };
//# sourceMappingURL=defsoul.js.map
