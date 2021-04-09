import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckedTableComponent } from './checked-table/checked-table.component';
import { CheckedTableComponentModule } from './checked-table/checked-table.module';



export * from '../components/checked-table/public-api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[CheckedTableComponentModule],
  entryComponents:[]
})
export class ComponentsModule { }
