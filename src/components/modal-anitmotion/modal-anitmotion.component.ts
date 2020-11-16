import { animate } from "@angular/animations";
import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-modal-anitmotion",
  templateUrl: "./modal-anitmotion.component.html",
  styleUrls: ["./modal-anitmotion.component.css"],
})
export class ModalAnitmotionComponent implements OnInit, AfterViewInit {
  items = [
    {
      title: "股东背景",
      images: "../assets/gudong.png",
      data: ["股东背景 - 纳入评估"],
      time: 5,
      display: true,
      top: 50,
    },
    {
      title: "经营评价",
      images: "../assets/icon_jy.png",
      data: [
        "受信企业成立年限 - 纳入评估",
        "受信企业在核心企业的供应商体系中排名 - 纳入评估",
      ],
      time: 5,
      display: false,
      top: 50,
    },
  ];

  // ,
  //   {
  //     title: "经营评价",
  //     images: "../assets/icon_jy.png",
  //     data: [
  //       "受信企业成立年限 - 纳入评估",
  //       "受信企业在核心企业的供应商体系中排名 - 纳入评估",
  //     ],
  //     time: 5,
  //     display: false,
  //     top: 50,
  //   },
  //   {
  //     title: "财务评价",
  //     images: "../assets/icon_cw_small.png",
  //     data: [
  //       "资产负债率 - 纳入评估",
  //       "销售利润率 - 纳入评估",
  //       "应收账款周转天数 - 纳入评估",
  //       "受信企业应收账款集中度 - 纳入评估",
  //     ],
  //     time: 5,
  //     display: false,
  //     top: 50,
  //   },
  //   {
  //     title: "核心企业评价",
  //     images: "../assets/icon_hx_small.png",
  //     data: [
  //       "核心企业背景 - 纳入评估",
  //       "核心企业评级 - 纳入评估",
  //       "核心企业配合程度 - 纳入评估",
  //     ],
  //     time: 5,
  //     display: false,
  //     top: 50,
  //   },
  //   {
  //     title: "合作记录评价",
  //     images: "../assets/icon_hz_small.png",
  //     data: [
  //       "受信企业与核心企业合作年限 - 纳入评估",
  //       "最长应收账款期限 - 纳入评估",
  //     ],
  //     time: 5,
  //     display: false,
  //     top: 50,
  //   },
  sucess = { title: "", images: "", data: [] };
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.changePic();
  }
  changePic() {
    var pic: any = document.querySelectorAll(".pic");
    for (var a = 0; i < pic.length; a++) {
      pic[a].style.display = "none";
      pic[0].style.display = "block";
    }
    for (var i = 0; i < pic.length; i++) {
      let heart = pic[i].querySelector(".heart");
      let icon = pic[i].querySelector(".type");
      let rinbow = pic[i].querySelector(".rinbow");
      setTimeout(() => {
        heart.style.animation = "heartbeat 1s infinite;zoom1 0.4s linear 1";
      }, 1700 * (i + 1) + 300 * i);
    }
  }
}
