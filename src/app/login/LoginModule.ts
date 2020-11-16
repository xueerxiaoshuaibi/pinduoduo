import { NgModule } from "@angular/core";
import { ComponentModule } from "src/components/components.module";
import { NgZorroAntdModule, NzIconModule } from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login.component";
import { MenuListComponent } from "../menu-list/menu-list.component";
import { LoginRoutingModule } from "./login-routing.module";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [LoginComponent],
  imports: [
    NzIconModule,
    ComponentModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    NzTabsModule,
    CommonModule,
  ],
})
export class LoginModule {}
