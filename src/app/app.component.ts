import { AfterViewInit, OnInit, Sanitizer } from "@angular/core";
import { Component, ViewChild } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "app";
  page: number;

  constructor(
    private san:DomSanitizer
  ) {}
  @ViewChild("externalPdfViewer", { static: true }) public externalPdfViewer;
  @ViewChild("embeddedPdfViewer", { static: true }) public embeddedPdfViewer;
  pdfSrc = "../assets/NodeJS中文文档.pdf";
  public openPdf() {
    console.log("opening pdf in new tab!");
    this.externalPdfViewer.pdfSrc = "../assets/NodeJS中文文档.pdf";
    this.externalPdfViewer.refresh();
  }

  public changePdf() {
    console.log("Changing pdf viewer url!");
    this.embeddedPdfViewer.pdfSrc = "../assets/NodeJS中文文档.pdf";
    this.embeddedPdfViewer.refresh();
  }
  ngOnInit(): void {
    // this.pdfSrc=this.san.bypassSecurityTrustResourceUrl(this.pdfSrc)
  }
  ngAfterViewInit() {
    setTimeout(() => { this.externalPdfViewer.pdfSrc = "../assets/NodeJS中文文档.pdf";}, 100);
    console.log(this.pdfSrc)
  }
}
