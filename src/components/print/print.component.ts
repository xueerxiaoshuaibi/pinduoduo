import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-print",
  templateUrl: "./print.component.html",
  styleUrls: ["./print.component.css"],
})
export class PrintComponent implements OnInit {
  constructor() {}

  value;
  address = {
    province: "福建",
    city: "厦门",
  };
  css = `table{
  width:100%!important
}`;
  ngOnInit() {}

  preview(css?) {
    const dom: any = document.getElementById("printDiv").cloneNode(true);
    const oldHTML: any = document
      .getElementsByTagName("head")[0]
      .cloneNode(true);
    console.log();
    const newWin = window.open();
    newWin.document.head.innerHTML = oldHTML.innerHTML;
    if (css) {
      const style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.innerHTML = css;
      newWin.document.getElementsByTagName("head")[0].innerHTML =
        newWin.document.getElementsByTagName("head")[0].innerHTML +
        style.innerHTML;
    }
    newWin.document.body.innerHTML = dom.innerHTML;
    newWin.window.onafterprint = () => {
      newWin.window.close();
    };
  }
}
