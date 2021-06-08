/**
 * @fileoverview added by tsickle
 * Generated from: checked-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
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
export { CheckedTableComponent };
if (false) {
    /** @type {?} */
    CheckedTableComponent.prototype.checked;
    /** @type {?} */
    CheckedTableComponent.prototype.dataSet;
    /** @type {?} */
    CheckedTableComponent.prototype.isAllChecked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tlZC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZWZzb3VsL2NvbXBvbmVudHMvY2hlY2tlZC10YWJsZS8iLCJzb3VyY2VzIjpbImNoZWNrZWQtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQUlsRDtJQWlKRTtRQWxJQSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRztZQUNSO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEdBQUcsRUFBRSxJQUFJO2dCQUNULE9BQU8sRUFBRSxNQUFNO2dCQUNmLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixPQUFPLEVBQUUsS0FBSzthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixHQUFHLEVBQUUsSUFBSTtnQkFDVCxPQUFPLEVBQUUsTUFBTTtnQkFDZixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsT0FBTyxFQUFFLEtBQUs7YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEdBQUcsRUFBRSxJQUFJO2dCQUNULE9BQU8sRUFBRSxNQUFNO2dCQUNmLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixPQUFPLEVBQUUsS0FBSzthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixHQUFHLEVBQUUsSUFBSTtnQkFD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QUMsT0FBTyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLEdBQUc7Z0JBQ3RCLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7WUFDOUIsQ0FBQyxFQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtnQkFDL0IsQ0FBQyxDQUFDLElBQUk7Z0JBQ04sQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNkLENBQUM7O2dCQXBNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIscXdDQUE2Qzs2QkFFM0MscUhBT0M7aUJBRUo7Ozs7SUF3TEQsNEJBQUM7Q0FBQSxBQXJNRCxJQXFNQztTQXZMWSxxQkFBcUI7OztJQUNoQyx3Q0FBZ0I7O0lBQ2hCLHdDQStIRTs7SUFDRiw2Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8qXHJcbiAqQ2hlY2tlZFRhYmxlQ29tcG9uZW505Y+v5Lul5YiG6aG16YCJ5oup77yM57+76aG15ZCO6YCJ6aG55Yu+6YCJ54q25oCB6L+Y5Zyo77yM5Y+v5Lul5YWo6YCJ77ybXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ3eC1jaGVja2VkLXRhYmxlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jaGVja2VkLXRhYmxlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5idXR0b24tbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgfVxyXG4gICAgYCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tlZFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjaGVja2VkID0gZmFsc2U7XHJcbiAgZGF0YVNldCA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLlvKDkuIlcIixcclxuICAgICAgYWdlOiBcIjEyXCIsXHJcbiAgICAgIGFkZHJlc3M6IFwi5rmW5Y2X55uK6ZizXCIsXHJcbiAgICAgIGludHJlc2V0OiBcImZvb3RiYWxsXCIsXHJcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGlzQWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG4gIC8qXHJcbiAgICrlhajpgInmiJbogIXlhajkuI3pgInnmoTmlrnms5VcclxuICAgKi9cclxuICBvbkFsbENoZWNrZWQoZT8pIHtcclxuICAgIHRoaXMuZ2V0SXNBbGxDaGVja2VkKCk7XHJcbiAgICBpZiAodGhpcy5pc0FsbENoZWNrZWQpIHtcclxuICAgICAgdGhpcy5kYXRhU2V0LmZvckVhY2goKGVsZSkgPT4ge1xyXG4gICAgICAgIGVsZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldE51bGwoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YVNldC5tYXAoKGVsZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoZWxlLmNoZWNrZWQgPSB0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0TnVsbCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRJc0FsbENoZWNrZWQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNldCk7XHJcbiAgfVxyXG4gIC8v5Y2V6KGM6KKr6YCJ5Lit5oiW6ICF5Y+W5raI6YCJ5LitXHJcbiAgb25JdGVtQ2hlY2tlZChpdGVtKSB7XHJcbiAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhU2V0KTtcclxuICAgIHRoaXMuc2V0TnVsbCgpO1xyXG4gIH1cclxuICAvL+ino+WGs+aVsOaNruWPmOS6humhtemdouS4jeabtOaWsOeahOmXrumimO+8jOWFiOWwhuaVsOaNruWcsOWdgOiuvuS4um51bGws54S25ZCO6LWL5YC877ybXHJcbiAgc2V0TnVsbCgpIHtcclxuICAgIGxldCBkYXRhID0gbnVsbDtcclxuICAgIGRhdGEgPSB0aGlzLmRhdGFTZXQ7XHJcbiAgICB0aGlzLmRhdGFTZXQgPSBudWxsO1xyXG4gICAgdGhpcy5kYXRhU2V0ID0gZGF0YTtcclxuICB9XHJcbiAgLy/mlbDmja7lj43pgIlcclxuICBpbnZlcnNlQ2hlY2tlZCgpIHtcclxuICAgIHRoaXMuZGF0YVNldC5tYXAoKGVsZSkgPT4ge1xyXG4gICAgICBlbGUuY2hlY2tlZCA9ICFlbGUuY2hlY2tlZDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXROdWxsKCk7XHJcbiAgICB0aGlzLmdldElzQWxsQ2hlY2tlZCgpO1xyXG4gIH1cclxuICAvL+WIpOaWreaVsOaNruaYr+WQpuWFqOmDqOmAieS4rVxyXG4gIGdldElzQWxsQ2hlY2tlZCgpIHtcclxuICAgIHRoaXMuaXNBbGxDaGVja2VkID1cclxuICAgICAgdGhpcy5kYXRhU2V0LmZpbHRlcigoZWxlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVsZS5jaGVja2VkID09PSB0cnVlO1xyXG4gICAgICB9KS5sZW5ndGggPT09IHRoaXMuZGF0YVNldC5sZW5ndGhcclxuICAgICAgICA/IHRydWVcclxuICAgICAgICA6IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=