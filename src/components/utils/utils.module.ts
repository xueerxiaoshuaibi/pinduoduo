import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NzIconModule, NgZorroAntdModule } from "ng-zorro-antd";
import { CommomMethods } from "./commom-methods";
@NgModule({
  declarations: [CommomMethods],
  imports: [
    ReactiveFormsModule,
    NzIconModule,
    NgZorroAntdModule,
    FormsModule,
    CommonModule,
  ],
  exports: [CommomMethods],
  providers: [],
})
export class UtilsModule {}
