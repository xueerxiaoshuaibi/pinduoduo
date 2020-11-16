import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { MenuListComponent } from "../menu-list/menu-list.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "menu",
    loadChildren: "src/app/menu-list/menu-list.module#MenuListModule",
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
