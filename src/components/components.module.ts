import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DivBulgeComponent } from "./div-bulge/div-bulge.component";
import { ShowSvgComponent } from "./show-svg/show-svg.component";
import { CaseTranslateComponent } from "./case-translate/case-translate.component";
import { ImageBaseComponent } from "./image-base/image-base.component";
import { RegularComponent } from "./regular/regular.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NzIconModule, NgZorroAntdModule } from "ng-zorro-antd";
import { HttpClientModule } from "@angular/common/http";
import { AutomaticExtensionComponent } from "./automatic-extension/automatic-extension.component";
import { ComponentRoutingModule } from "./component-routing.module";
import { NumberComponent } from "./number/number.component";
import { PrintComponent } from "./print/print.component";
// import { CaseWizardComponent } from "./case-wizard/case-wizard.component";
import { UploadFileComponent } from "./upload-file/upload-file.component";
import { AutoTextareaComponent } from "./auto-textarea/auto-textarea.component";
import { ModalAnitmotionComponent } from "./modal-anitmotion/modal-anitmotion.component";
import { EchartCompoComponent } from "./echart-compo/echart-compo.component";
import { ComponentBoxComponent } from "./component-box/component-box.component";

const list = [
  DivBulgeComponent,
  ShowSvgComponent,
  ImageBaseComponent,
  RegularComponent,
  CaseTranslateComponent,
  AutomaticExtensionComponent,
  NumberComponent,
  PrintComponent,
  ComponentBoxComponent,
  UploadFileComponent,
  AutoTextareaComponent,
  ModalAnitmotionComponent,
  EchartCompoComponent,
];
@NgModule({
  declarations: [...list],
  imports: [
    ReactiveFormsModule,
    NzIconModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    ComponentRoutingModule,
    CommonModule,
  ],
  exports: [...list],
  providers: [],
  entryComponents: [...list],
})
export class ComponentModule {}
