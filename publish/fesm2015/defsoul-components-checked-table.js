import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';

/**
 * @fileoverview added by tsickle
 * Generated from: checked-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 *CheckedTableComponent可以分页选择，翻页后选项勾选状态还在，可以全选；
 */
class CheckedTableComponent {
    constructor() {
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
    ngOnInit() { }
    /*
       *全选或者全不选的方法
       */
    /**
     * @param {?=} e
     * @return {?}
     */
    onAllChecked(e) {
        this.getIsAllChecked();
        if (this.isAllChecked) {
            this.dataSet.forEach((/**
             * @param {?} ele
             * @return {?}
             */
            (ele) => {
                ele.checked = false;
            }));
            this.setNull();
        }
        else {
            this.dataSet.map((/**
             * @param {?} ele
             * @return {?}
             */
            (ele) => {
                return (ele.checked = true);
            }));
            this.setNull();
        }
        this.getIsAllChecked();
        console.log(this.dataSet);
    }
    //单行被选中或者取消选中
    /**
     * @param {?} item
     * @return {?}
     */
    onItemChecked(item) {
        item.checked = !item.checked;
        console.log(this.dataSet);
        this.setNull();
    }
    //解决数据变了页面不更新的问题，先将数据地址设为null,然后赋值；
    /**
     * @return {?}
     */
    setNull() {
        /** @type {?} */
        let data = null;
        data = this.dataSet;
        this.dataSet = null;
        this.dataSet = data;
    }
    //数据反选
    /**
     * @return {?}
     */
    inverseChecked() {
        this.dataSet.map((/**
         * @param {?} ele
         * @return {?}
         */
        (ele) => {
            ele.checked = !ele.checked;
        }));
        this.setNull();
        this.getIsAllChecked();
    }
    //判断数据是否全部选中
    /**
     * @return {?}
     */
    getIsAllChecked() {
        this.isAllChecked =
            this.dataSet.filter((/**
             * @param {?} ele
             * @return {?}
             */
            (ele) => {
                return ele.checked === true;
            })).length === this.dataSet.length
                ? true
                : false;
    }
}
CheckedTableComponent.decorators = [
    { type: Component, args: [{
                selector: "wx-checked-table",
                template: "<div class=\"button-list\">\r\n    <button nz-button nzType=\"primary\" [disabled]=\"isAllChecked===true\" (click)=\"onAllChecked()\">\u5168\u9009</button>\r\n    <button nz-button nzType=\"primary\" [disabled]=\"isAllChecked===false\" (click)=\"onAllChecked()\">\u53D6\u6D88\u5168\u9009</button>\r\n    <button nz-button nzType=\"primary\" (click)=\"inverseChecked()\">\u53CD\u9009</button>\r\n</div>\r\n<nz-table #basicTable [nzData]=\"dataSet\" [nzTemplateMode]=\"true\" [nzFrontPagination]=\"true\" [nzTotal]=\"dataSet.length\" [nzPageSize]=\"5\">\r\n    <thead>\r\n        <tr>\r\n            <th [nzShowCheckbox]=\"true\" [nzChecked]=\"isAllChecked\" (nzCheckedChange)=\"onAllChecked($event)\"></th>\r\n            <th>Name</th>\r\n            <th>Age</th>\r\n            <th>Address</th>\r\n            <th>Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let data of basicTable.data\">\r\n            <td [nzShowCheckbox]=\"true\" [nzChecked]=\"data?.checked\" (nzCheckedChange)=\"onItemChecked(data)\"></td>\r\n            <td>{{ data?.name }}</td>\r\n            <td>{{ data?.age }}</td>\r\n            <td>{{ data?.address }}</td>\r\n            <td>{{ data?.intreset }}</td>\r\n        </tr>\r\n    </tbody>\r\n</nz-table>\r\n",
                styles: [`
      button {
        margin-right: 10px;
      }
      .button-list {
        padding: 15px;
      }
    `]
            }] }
];
/** @nocollapse */
CheckedTableComponent.ctorParameters = () => [];
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
 * Generated from: checked-table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckedTableComponentModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: defsoul-components-checked-table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CheckedTableComponent, CheckedTableComponentModule };
//# sourceMappingURL=defsoul-components-checked-table.js.map
