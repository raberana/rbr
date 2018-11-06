import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), CommonModule],
  exports: [RouterModule],
  declarations: [AdminComponent]
})
export class AdminModule {}
