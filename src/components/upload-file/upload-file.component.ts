import { Component, OnInit } from "@angular/core";
import { UpLoaderService } from "src/app/service/up-loader.service";

@Component({
  selector: "app-upload-file",
  templateUrl: "./upload-file.component.html",
  styleUrls: ["./upload-file.component.css"],
})
export class UploadFileComponent implements OnInit {
  message: string;

  constructor(private uploaderService: UpLoaderService) {}

  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe((msg) => {
        input.value = null;
        this.message = msg;
      });
    }
  }
  ngOnInit() {}
}
