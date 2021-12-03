import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one.component';


const routes: Routes = [
  { path: '', component: OneComponent }
];

@NgModule({
  declarations: [
    OneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OneModule { }
