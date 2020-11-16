import { Injectable } from "@angular/core";
import { PrintComponent } from "src/components/print/print.component";
import { NumberComponent } from "src/components/number/number.component";
import { EchartCompoComponent } from "src/components/echart-compo/echart-compo.component";
import { DivBulgeComponent } from "src/components/div-bulge/div-bulge.component";

@Injectable({
  providedIn: "root",
})
export class ComomService {
  list1 = [NumberComponent, PrintComponent];
  list2 = [EchartCompoComponent, DivBulgeComponent];
  constructor() {}
}
