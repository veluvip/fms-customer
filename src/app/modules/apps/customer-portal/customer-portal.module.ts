import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPortalComponent } from './customer-portal.component';
import { RouterModule } from '@angular/router';
import { FoodItemComponent } from './food-item/food-item.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    CustomerPortalComponent,
    FoodItemComponent
  ],
  imports: [
    CommonModule,
    NgbAccordionModule,
    RouterModule.forChild([
      {
        path: "",
        redirectTo: 'customer',
        pathMatch:'full'
      },
      {
        path:'customer',
        component:CustomerPortalComponent
      }
    ])
  ]
})
export class CustomerPortalModule { }
