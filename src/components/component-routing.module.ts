import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AutomaticExtensionComponent } from "./automatic-extension/automatic-extension.component";
import { NumberComponent } from "./number/number.component";
import { EchartCompoComponent } from "./echart-compo/echart-compo.component";

const routes: Routes = [
  { path: "extension", component: AutomaticExtensionComponent },
  { path: "num", component: NumberComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
