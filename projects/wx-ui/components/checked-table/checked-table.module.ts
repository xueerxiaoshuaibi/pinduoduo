import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckedTableComponent } from './checked-table.component';
import { NzTableModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [CheckedTableComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule
  ],
  exports:[CheckedTableComponent],
  entryComponents:[CheckedTableComponent]
})
export class CheckedTableComponentModule { }
