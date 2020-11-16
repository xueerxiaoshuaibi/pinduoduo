import { NgModule } from "@angular/core";
import { ComponentModule } from "src/components/components.module";
import { NgZorroAntdModule, NzIconModule } from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { CommonModule } from "@angular/common";
import { MenuListRoutingModule } from "./menu-list.-routing.module";
import { MenuListComponent } from "./menu-list.component";
import { CaseWizardComponent } from "src/components/case-wizard/case-wizard.component";
import { NumberComponent } from "src/components/number/number.component";
import { PrintComponent } from "src/components/print/print.component";
import { EchartCompoComponent } from "src/components/echart-compo/echart-compo.component";
import { DivBulgeComponent } from "src/components/div-bulge/div-bulge.component";
const list1 = [NumberComponent, PrintComponent];
const list2 = [EchartCompoComponent, DivBulgeComponent];
@NgModule({
  declarations: [MenuListComponent],
  imports: [
    NzIconModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MenuListRoutingModule,
    NzTabsModule,
    CommonModule,
    ComponentModule,
  ],
  exports: [MenuListComponent],
  // entryComponents: [...list2],
})
export class MenuListModule {}
