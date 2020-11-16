import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-show-svg",
  templateUrl: "./show-svg.component.html",
  styleUrls: ["./show-svg.component.css"]
})
export class ShowSvgComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    debugger;
    setTimeout(() => {
      const el = document.getElementById("testImg");
      el.innerHTML = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 54 (76480) - https://sketchapp.com -->
    <title>编组 11</title>
    <desc>Created with Sketch.</desc>
    <g id="页面1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="首页-5复制" transform="translate(-1423.000000, -46.000000)" stroke="#FFFFFF">
            <g id="编组-11" transform="translate(1424.000000, 47.000000)">
                <circle id="椭圆形" cx="14" cy="14" r="14"></circle>
                <path d="M14,12.6 C11.6804041,12.6 9.8,10.7195959 9.8,8.4 C9.8,6.08040405 11.6804041,4.2 14,4.2 C16.3195959,4.2 18.2,6.08040405 18.2,8.4 C18.2,10.7195959 16.3195959,12.6 14,12.6 Z M5.79900791,19.7983086 C6.67344463,15.6853997 10.3264055,12.6 14.7,12.6 C17.2114938,12.6 19.4853574,13.6174161 21.1319152,15.262573" id="形状"></path>
                <polyline id="路径-12" stroke-linecap="round" points="14 18.240332 22.6139648 18.240332 21.1736328 16.8"></polyline>
                <polyline id="路径-12复制-2" stroke-linecap="round" transform="translate(18.306982, 21.720166) scale(-1, -1) translate(-18.306982, -21.720166) " points="14 22.440332 22.6139648 22.440332 21.1736328 21"></polyline>
            </g>
        </g>
    </g>
</svg>
<?xml version="1.0" encoding="UTF-8"?>
<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 54 (76480) - https://sketchapp.com -->
    <title>编组 11复制</title>
    <desc>Created with Sketch.</desc>
    <g id="页面1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="编组-11复制" transform="translate(1.000000, 1.000000)" stroke="#A2BED4">
            <circle id="椭圆形" cx="14" cy="14" r="14"></circle>
            <path d="M14,12.6 C11.6804041,12.6 9.8,10.7195959 9.8,8.4 C9.8,6.08040405 11.6804041,4.2 14,4.2 C16.3195959,4.2 18.2,6.08040405 18.2,8.4 C18.2,10.7195959 16.3195959,12.6 14,12.6 Z M5.79900791,19.7983086 C6.67344463,15.6853997 10.3264055,12.6 14.7,12.6 C17.2114938,12.6 19.4853574,13.6174161 21.1319152,15.262573" id="形状"></path>
            <polyline id="路径-12" stroke-linecap="round" points="14 18.240332 22.6139648 18.240332 21.1736328 16.8"></polyline>
            <polyline id="路径-12复制-2" stroke-linecap="round" transform="translate(18.306982, 21.720166) scale(-1, -1) translate(-18.306982, -21.720166) " points="14 22.440332 22.6139648 22.440332 21.1736328 21"></polyline>
        </g>
    </g>
</svg>
`;
    }, 500);
  }
}
