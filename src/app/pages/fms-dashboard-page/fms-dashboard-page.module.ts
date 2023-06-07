import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FmsDashboardPageComponent } from './fms-dashboard-page.component';

@NgModule({
  declarations: [
    FmsDashboardPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FmsDashboardPageComponent
      }
    ]),
   
  ]
})
export class FmsDashboardPageModule { }
