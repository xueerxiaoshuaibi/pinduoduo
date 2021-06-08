import { Component, OnInit } from "@angular/core";
/*
 *CheckedTableComponent可以分页选择，翻页后选项勾选状态还在，可以全选；
 */
@Component({
  selector: "wx-checked-table",
  templateUrl: "./checked-table.component.html",
  styles: [
    `
      button {
        margin-right: 10px;
      }
      .button-list {
        padding: 15px;
      }
    `,
  ],
})
export class CheckedTableComponent implements OnInit {
  checked = false;
  dataSet = [
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
  isAllChecked = false;
  constructor() {}

  ngOnInit() {}
  /*
   *全选或者全不选的方法
   */
  onAllChecked(e?) {
    this.getIsAllChecked();
    if (this.isAllChecked) {
      this.dataSet.forEach((ele) => {
        ele.checked = false;
      });
      this.setNull();
    } else {
      this.dataSet.map((ele) => {
        return (ele.checked = true);
      });
      this.setNull();
    }
    this.getIsAllChecked();
    console.log(this.dataSet);
  }
  //单行被选中或者取消选中
  onItemChecked(item) {
    item.checked = !item.checked;
    console.log(this.dataSet);
    this.setNull();
  }
  //解决数据变了页面不更新的问题，先将数据地址设为null,然后赋值；
  setNull() {
    let data = null;
    data = this.dataSet;
    this.dataSet = null;
    this.dataSet = data;
  }
  //数据反选
  inverseChecked() {
    this.dataSet.map((ele) => {
      ele.checked = !ele.checked;
    });
    this.setNull();
    this.getIsAllChecked();
  }
  //判断数据是否全部选中
  getIsAllChecked() {
    this.isAllChecked =
      this.dataSet.filter((ele) => {
        return ele.checked === true;
      }).length === this.dataSet.length
        ? true
        : false;
  }
}
