// my-lib.module.ts

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertModule } from "./alert/alert.module";
import { ComponentsModule } from "./components/components.module";

export * from "./utils/public-api";

@NgModule({
  imports: [CommonModule],
  exports: [AlertModule, ComponentsModule],
  providers: [],
  declarations: [],
})
export class MyLibModule {}
