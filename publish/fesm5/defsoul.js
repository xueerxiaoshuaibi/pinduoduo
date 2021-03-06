import { EventEmitter, Component, Input, Output, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';

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
 * Generated from: components/checked-table/checked-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 *CheckedTableComponent可以分页选择，翻页后选项勾选状态还在，可以全选；
 */
var CheckedTableComponent = /** @class */ (function () {
    function CheckedTableComponent() {
        this.checked = false;
        this.dataSet = [
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
            {
                name: "张三",
                age: "12",
                address: "湖南益阳",
                intreset: "football",
                checked: false,
            },
        ];
        this.isAllChecked = false;
    }
    /**
     * @return {?}
     */
    CheckedTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /*
     *全选或者全不选的方法
     */
    /*
       *全选或者全不选的方法
       */
    /**
     * @param {?=} e
     * @return {?}
     */
    CheckedTableComponent.prototype.onAllChecked = /*
       *全选或者全不选的方法
       */
    /**
     * @param {?=} e
     * @return {?}
     */
    function (e) {
        this.getIsAllChecked();
        if (this.isAllChecked) {
            this.dataSet.forEach((/**
             * @param {?} ele
             * @return {?}
             */
            function (ele) {
                ele.checked = false;
            }));
            this.setNull();
        }
        else {
            this.dataSet.map((/**
             * @param {?} ele
             * @return {?}
             */
            function (ele) {
                return (ele.checked = true);
            }));
            this.setNull();
        }
        this.getIsAllChecked();
        console.log(this.dataSet);
    };
    //单行被选中或者取消选中
    //单行被选中或者取消选中
    /**
     * @param {?} item
     * @return {?}
     */
    CheckedTableComponent.prototype.onItemChecked = 
    //单行被选中或者取消选中
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.checked = !item.checked;
        console.log(this.dataSet);
        this.setNull();
    };
    //解决数据变了页面不更新的问题，先将数据地址设为null,然后赋值；
    //解决数据变了页面不更新的问题，先将数据地址设为null,然后赋值；
    /**
     * @return {?}
     */
    CheckedTableComponent.prototype.setNull = 
    //解决数据变了页面不更新的问题，先将数据地址设为null,然后赋值；
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = null;
        data = this.dataSet;
        this.dataSet = null;
        this.dataSet = data;
    };
    //数据反选
    //数据反选
    /**
     * @return {?}
     */
    CheckedTableComponent.prototype.inverseChecked = 
    //数据反选
    /**
     * @return {?}
     */
    function () {
        this.dataSet.map((/**
         * @param {?} ele
         * @return {?}
         */
        function (ele) {
            ele.checked = !ele.checked;
        }));
        this.setNull();
        this.getIsAllChecked();
    };
    //判断数据是否全部选中
    //判断数据是否全部选中
    /**
     * @return {?}
     */
    CheckedTableComponent.prototype.getIsAllChecked = 
    //判断数据是否全部选中
    /**
     * @return {?}
     */
    function () {
        this.isAllChecked =
            this.dataSet.filter((/**
             * @param {?} ele
             * @return {?}
             */
            function (ele) {
                return ele.checked === true;
            })).length === this.dataSet.length
                ? true
                : false;
    };
    CheckedTableComponent.decorators = [
        { type: Component, args: [{
                    selector: "wx-checked-table",
                    template: "<div class=\"button-list\">\r\n    <button nz-button nzType=\"primary\" [disabled]=\"isAllChecked===true\" (click)=\"onAllChecked()\">\u5168\u9009</button>\r\n    <button nz-button nzType=\"primary\" [disabled]=\"isAllChecked===false\" (click)=\"onAllChecked()\">\u53D6\u6D88\u5168\u9009</button>\r\n    <button nz-button nzType=\"primary\" (click)=\"inverseChecked()\">\u53CD\u9009</button>\r\n</div>\r\n<nz-table #basicTable [nzData]=\"dataSet\" [nzTemplateMode]=\"true\" [nzFrontPagination]=\"true\" [nzTotal]=\"dataSet.length\" [nzPageSize]=\"5\">\r\n    <thead>\r\n        <tr>\r\n            <th [nzShowCheckbox]=\"true\" [nzChecked]=\"isAllChecked\" (nzCheckedChange)=\"onAllChecked($event)\"></th>\r\n            <th>Name</th>\r\n            <th>Age</th>\r\n            <th>Address</th>\r\n            <th>Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let data of basicTable.data\">\r\n            <td [nzShowCheckbox]=\"true\" [nzChecked]=\"data?.checked\" (nzCheckedChange)=\"onItemChecked(data)\"></td>\r\n            <td>{{ data?.name }}</td>\r\n            <td>{{ data?.age }}</td>\r\n            <td>{{ data?.address }}</td>\r\n            <td>{{ data?.intreset }}</td>\r\n        </tr>\r\n    </tbody>\r\n</nz-table>\r\n",
                    styles: ["\n      button {\n        margin-right: 10px;\n      }\n      .button-list {\n        padding: 15px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CheckedTableComponent.ctorParameters = function () { return []; };
    return CheckedTableComponent;
}());
if (false) {
    /** @type {?} */
    CheckedTableComponent.prototype.checked;
    /** @type {?} */
    CheckedTableComponent.prototype.dataSet;
    /** @type {?} */
    CheckedTableComponent.prototype.isAllChecked;
}

/**
 * @fileoverview added by tsickle
 * Generated from: components/checked-table/checked-table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckedTableComponentModule = /** @class */ (function () {
    function CheckedTableComponentModule() {
    }
    CheckedTableComponentModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CheckedTableComponent],
                    imports: [
                        CommonModule,
                        NzTableModule,
                        NzButtonModule
                    ],
                    exports: [CheckedTableComponent],
                    entryComponents: [CheckedTableComponent]
                },] }
    ];
    return CheckedTableComponentModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: components/auto-textarea/auto-textarea.component.ts
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
 * Generated from: components/auto-textarea/auto-textarea.module.ts
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
 * Generated from: components/checked-table/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: components/auto-textarea/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: components/components.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        CommonModule
                    ],
                    exports: [CheckedTableComponentModule, AutoTextAreaModule],
                    entryComponents: []
                },] }
    ];
    return ComponentsModule;
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
                    exports: [AlertModule, ComponentsModule],
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

export { MyLibModule, AlertModule as ɵa, AlertComponent as ɵb, ComponentsModule as ɵc, CheckedTableComponent as ɵd, CheckedTableComponentModule as ɵe, AutoTextareaComponent as ɵf, AutoTextAreaModule as ɵg };
//# sourceMappingURL=defsoul.js.map
