import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoTextareaComponent } from './auto-textarea.component';

@NgModule({
  declarations: [AutoTextareaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[AutoTextareaComponent],
  entryComponents:[AutoTextareaComponent]
})
export class AutoTextAreaModule { }
