import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableComponent } from '../reusable/reusable.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReusableComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    CommonModule,
    ReusableComponent
  ],
})
export class SharedModule { }
