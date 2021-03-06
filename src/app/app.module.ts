import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { ComponentModule } from "src/components/components.module";
import { NgZorroAntdModule, NZ_I18N, en_US, NzIconModule } from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData, CommonModule } from "@angular/common";
import en from "@angular/common/locales/en";
import { LoginModule } from "./login/LoginModule";
import { TransformComponent } from "./transform/transform.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MenuListModule } from "./menu-list/menu-list.module";
import { MyLibModule } from "projects/wx-ui/my-lib.module";
// import { PdfViewerModule } from 'ng2-pdf-viewer';
// import { PdfJsViewerModule} from 'ng2-pdfjs-viewer';
@NgModule({
  declarations: [AppComponent, TransformComponent],
  imports: [
    BrowserModule,
    NzIconModule,
    AppRoutingModule,
    // ComponentModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LoginModule,
    CommonModule,
    DragDropModule,
    MenuListModule,
    MyLibModule,
    // PdfViewerModule,
    // PdfJsViewerModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
