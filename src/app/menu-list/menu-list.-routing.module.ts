import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AutomaticExtensionComponent } from "src/components/automatic-extension/automatic-extension.component";
import { MenuListComponent } from "./menu-list.component";
import { CaseWizardComponent } from "src/components/case-wizard/case-wizard.component";
import { EchartCompoComponent } from "src/components/echart-compo/echart-compo.component";
import { NumberComponent } from "src/components/number/number.component";
import { DynamicComponent } from "src/components/dynamic/dynamic.component";

const routes: Routes = [
  {
    path: "",
    component: MenuListComponent,
    children: [
      { path: "echart", component: EchartCompoComponent },
      { path: "num", component: NumberComponent },
      { path: "extension", component: AutomaticExtensionComponent },
      { path: "dynamic", component: DynamicComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuListRoutingModule {}
