import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckedTableComponentModule } from './checked-table/checked-table.module';
import { AutoTextAreaModule } from './auto-textarea/auto-textarea.module';



export * from '../components/checked-table/public-api';
export * from '../components/auto-textarea/public-api';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[CheckedTableComponentModule,AutoTextAreaModule],
  entryComponents:[]
})
export class ComponentsModule { }
