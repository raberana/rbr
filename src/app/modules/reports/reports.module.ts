import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: ReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), CommonModule],
  exports: [RouterModule],
  declarations: [ReportsComponent]
})
export class ReportsModule {}
