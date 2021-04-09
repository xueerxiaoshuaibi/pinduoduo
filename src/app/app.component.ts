import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    // window.addEventListener("beforeunload", function (e) {
    //   localStorage.setItem('loginTimes','0');
    //   e.returnValue = "确认离开吗";
    // });
  }
}
