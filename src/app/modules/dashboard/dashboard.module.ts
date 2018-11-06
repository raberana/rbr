import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), CommonModule],
  exports: [RouterModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
