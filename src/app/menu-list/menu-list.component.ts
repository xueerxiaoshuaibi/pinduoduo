import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ComomService } from "../service/comom.service";

@Component({
  selector: "app-menu-list",
  templateUrl: "./menu-list.component.html",
  styleUrls: ["./menu-list.component.css"],
})
export class MenuListComponent implements OnInit {
  isCollapsed = false;
  tabs = [];
  selectIndex = 0;
  com;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private comSrv: ComomService
  ) {}

  ngOnInit() {
    // this.com = this.comSrv.list1;
    this.itemClick(0);
  }

  back() {
    history.back();
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  closeTab(tab) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    this.selectIndex = this.tabs.length - 1;
  }
  itemClick(tab) {
    if (this.tabs.indexOf(tab) > -1) {
      this.selectIndex = this.tabs.indexOf(tab);
      return;
    }
    this.tabs.push(tab);
    this.selectIndex = this.tabs.length - 1;
    console.log(this.tabs);
    console.log(this.selectIndex);
    if (tab == 0) {
      this.router.navigate(["extension"], { relativeTo: this.route });
    } else if (tab == 1) {
      // this.router.navigate(["extension"], {});
    } else if (tab == 2) {
      this.router.navigate(["num"], { relativeTo: this.route });
    } else if (tab == 3) {
      this.router.navigate(["echart"], { relativeTo: this.route });
    } else if (tab == "dynamic") {
      this.router.navigate(["dynamic"], { relativeTo: this.route });
    }
  }
}
