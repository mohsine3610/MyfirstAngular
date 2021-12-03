import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TwoComponent } from './two.component';


const routes: Routes = [
  { path: '', component: TwoComponent }
];

@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TwoModule { }
