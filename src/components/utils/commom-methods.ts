export class CommomMethods {
  constructor() {}
  value;
  address = {
    province: "福建",
    city: "厦门",
  };

  //正则--只一定范围的整数
  math1() {
    var reg = /^([0-9]|10|11|12)$/;
    if (!reg.test(this.value)) {
      this.value = "";
      alert("请输入0-12的整数");
    }
    console.log(reg.test(this.value)); //true
  }
}
