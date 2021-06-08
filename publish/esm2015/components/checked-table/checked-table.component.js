/**
 * @fileoverview added by tsickle
 * Generated from: checked-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
/*
 *CheckedTableComponent可以分页选择，翻页后选项勾选状态还在，可以全选；
 */
export class CheckedTableComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tlZC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZWZzb3VsL2NvbXBvbmVudHMvY2hlY2tlZC10YWJsZS8iLCJzb3VyY2VzIjpbImNoZWNrZWQtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQWtCbEQsTUFBTSxPQUFPLHFCQUFxQjtJQW1JaEM7UUFsSUEsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUc7WUFDUjtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixHQUFHLEVBQUUsSUFBSTtnQkFDVCxPQUFPLEVBQUUsTUFBTTtnQkFDZixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsT0FBTyxFQUFFLEtBQUs7YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEdBQUcsRUFBRSxJQUFJO2dCQUNULE9BQU8sRUFBRSxNQUFNO2dCQUNmLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixPQUFPLEVBQUUsS0FBSzthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixHQUFHLEVBQUUsSUFBSTtnQkFDVCxPQUFPLEVBQUUsTUFBTTtnQkFDZixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsT0FBTyxFQUFFLEtBQUs7YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEdBQUcsRUFBRSxJQUFJO2dCQUNULE9BQU8sRUFBRSxNQUFNO2dCQUNmLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixPQUFPLEVBQUUsS0FBSzthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLElBQUk7Z0JBQ1Ys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QyxPQUFPLEtBQUssSUFBSSxDQUFDO1lBQzlCLENBQUMsRUFBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Z0JBQy9CLENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7WUFwTUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHF3Q0FBNkM7eUJBRTNDOzs7Ozs7O0tBT0M7YUFFSjs7Ozs7O0lBRUMsd0NBQWdCOztJQUNoQix3Q0ErSEU7O0lBQ0YsNkNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vKlxyXG4gKkNoZWNrZWRUYWJsZUNvbXBvbmVudOWPr+S7peWIhumhtemAieaLqe+8jOe/u+mhteWQjumAiemhueWLvumAieeKtuaAgei/mOWcqO+8jOWPr+S7peWFqOmAie+8m1xyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwid3gtY2hlY2tlZC10YWJsZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2hlY2tlZC10YWJsZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuYnV0dG9uLWxpc3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrZWRUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY2hlY2tlZCA9IGZhbHNlO1xyXG4gIGRhdGFTZXQgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwi5byg5LiJXCIsXHJcbiAgICAgIGFnZTogXCIxMlwiLFxyXG4gICAgICBhZGRyZXNzOiBcIua5luWNl+ebiumYs1wiLFxyXG4gICAgICBpbnRyZXNldDogXCJmb290YmFsbFwiLFxyXG4gICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXTtcclxuICBpc0FsbENoZWNrZWQgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuICAvKlxyXG4gICAq5YWo6YCJ5oiW6ICF5YWo5LiN6YCJ55qE5pa55rOVXHJcbiAgICovXHJcbiAgb25BbGxDaGVja2VkKGU/KSB7XHJcbiAgICB0aGlzLmdldElzQWxsQ2hlY2tlZCgpO1xyXG4gICAgaWYgKHRoaXMuaXNBbGxDaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNldC5mb3JFYWNoKChlbGUpID0+IHtcclxuICAgICAgICBlbGUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXROdWxsKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGFTZXQubWFwKChlbGUpID0+IHtcclxuICAgICAgICByZXR1cm4gKGVsZS5jaGVja2VkID0gdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldE51bGwoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0SXNBbGxDaGVja2VkKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFTZXQpO1xyXG4gIH1cclxuICAvL+WNleihjOiiq+mAieS4reaIluiAheWPlua2iOmAieS4rVxyXG4gIG9uSXRlbUNoZWNrZWQoaXRlbSkge1xyXG4gICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNldCk7XHJcbiAgICB0aGlzLnNldE51bGwoKTtcclxuICB9XHJcbiAgLy/op6PlhrPmlbDmja7lj5jkuobpobXpnaLkuI3mm7TmlrDnmoTpl67popjvvIzlhYjlsIbmlbDmja7lnLDlnYDorr7kuLpudWxsLOeEtuWQjui1i+WAvO+8m1xyXG4gIHNldE51bGwoKSB7XHJcbiAgICBsZXQgZGF0YSA9IG51bGw7XHJcbiAgICBkYXRhID0gdGhpcy5kYXRhU2V0O1xyXG4gICAgdGhpcy5kYXRhU2V0ID0gbnVsbDtcclxuICAgIHRoaXMuZGF0YVNldCA9IGRhdGE7XHJcbiAgfVxyXG4gIC8v5pWw5o2u5Y+N6YCJXHJcbiAgaW52ZXJzZUNoZWNrZWQoKSB7XHJcbiAgICB0aGlzLmRhdGFTZXQubWFwKChlbGUpID0+IHtcclxuICAgICAgZWxlLmNoZWNrZWQgPSAhZWxlLmNoZWNrZWQ7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0TnVsbCgpO1xyXG4gICAgdGhpcy5nZXRJc0FsbENoZWNrZWQoKTtcclxuICB9XHJcbiAgLy/liKTmlq3mlbDmja7mmK/lkKblhajpg6jpgInkuK1cclxuICBnZXRJc0FsbENoZWNrZWQoKSB7XHJcbiAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9XHJcbiAgICAgIHRoaXMuZGF0YVNldC5maWx0ZXIoKGVsZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBlbGUuY2hlY2tlZCA9PT0gdHJ1ZTtcclxuICAgICAgfSkubGVuZ3RoID09PSB0aGlzLmRhdGFTZXQubGVuZ3RoXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19