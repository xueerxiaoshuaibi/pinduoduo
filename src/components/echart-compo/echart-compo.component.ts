import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as echarts from "echarts";
@Component({
  selector: "app-echart-compo",
  templateUrl: "./echart-compo.component.html",
  styleUrls: ["./echart-compo.component.css"],
})
export class EchartCompoComponent implements OnInit, AfterViewInit {
  base;
  option = {
    title: {
      text: "世界人口总量",
      subtext: "数据来自网络",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["2011年", "2012年"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    xAxis: {
      type: "category",
      data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
    },
    series: [
      {
        name: "2011年",
        type: "bar",
        label: {
          formatter: (a) => {
            return a.data.name;
          },
          color: "#6d6d6d",
          show: true,
          position: "bottom",
        },
        data: [
          { name: "2017", value: 18203 },
          { name: "2010", value: 23489 },
          { name: "2019", value: 29034 },
          { name: "2020", value: 104970 },
          { name: "2021", value: 131744 },
          { name: "2022", value: 630230 },
        ],
      },
      {
        name: "2012年",
        type: "bar",
        label: {
          formatter: (a) => {
            return a.data.name;
          },
          color: "#6d6d6d",
          show: true,
          position: "bottom",
        },
        data: [
          { name: "2018", value: 19325 },
          { name: "2010", value: 23438 },
          { name: "2019", value: 31000 },
          { name: "2020", value: 121594 },
          { name: "2021", value: 134141 },
          { name: "2022", value: 681807 },
        ],
      },
    ],
  };
  option1 = {
    title: {
      text: "世界人口总量",
      subtext: "数据来自网络",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["2011年", "2012年"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      data: ["A公司", "B公司", "C公司", "D公司", "E公司"],
    },
    xAxis: {
      type: "category",
      data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
    },
    series: [
      {
        name: "2011年",
        type: "bar",
        label: {
          formatter: (a) => {
            return a.data.name;
          },
          color: "#6d6d6d",
          show: true,
          position: "top",
        },
        stack: "总量", //堆叠效果
        data: [
          { name: "A公司", value: 18203 },
          { name: "B公司", value: 23489 },
          { name: "C公司", value: 29034 },
          { name: "D公司", value: 104970 },
          { name: "E公司", value: 131744 },
        ],
      },
      {
        name: "2012年",
        type: "bar",
        stack: "总量",
        label: {
          formatter: (a) => {
            return a.data.name;
          },
          color: "#6d6d6d",
          show: true,
          position: "top",
        },
        data: [
          { name: "A公司", value: 19325 },
          { name: "B公司", value: 23438 },
          { name: "C公司", value: 31000 },
          { name: "D公司", value: 121594 },
          { name: "E公司", value: 134141 },
        ],
      },
    ],
  };
  //饼图里外都有标签
  option2 = {
    title: {
      text: "某站点用户访问来源",
      subtext: "纯属虚构",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 234, name: "联盟广告" },
          { value: 135, name: "视频广告" },
          { value: 1548, name: "搜索引擎" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        label: {
          position: "inner",
          formatter: (a) => {
            return `${a.percent}  %`;
          },
        },
        data: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 234, name: "联盟广告" },
          { value: 135, name: "视频广告" },
          { value: 1548, name: "搜索引擎" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  constructor() {}
  ngOnInit() {
    setTimeout(() => {
      var myChart = echarts.init(document.getElementById("myEchart"));
      var myChart1 = echarts.init(document.getElementById("myEchart1"));
      var myChart2 = echarts.init(document.getElementById("myEchart2"));
      myChart2.setOption(this.option2);
      myChart1.setOption(this.option1);
      myChart.setOption(this.option);
      console.log(myChart);
    }, 300);
  }
  ngAfterViewInit() {}
}
