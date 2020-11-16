import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AutomaticExtensionComponent } from "src/components/automatic-extension/automatic-extension.component";
import { MenuListComponent } from "./menu-list.component";
import { CaseWizardComponent } from "src/components/case-wizard/case-wizard.component";
import { EchartCompoComponent } from "src/components/echart-compo/echart-compo.component";

const routes: Routes = [
  {
    path: "",
    component: MenuListComponent,
    children: [{ path: "echart", component: EchartCompoComponent }],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuListRoutingModule {}
