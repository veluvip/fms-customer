import { Component } from '@angular/core';
import { CustomerPortalService } from '../customer-portal.service';
@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent {

   counts:any=0;
  constructor(
    private customerendservice:CustomerPortalService
   ) {
    // Customize accordion behavior
  }
  accordionItems = [
    { title: 'Accordion Item #1', content: 'Content for Accordion Item #1',count:0 },
    
  ];

  incrementCount(item: any) {
    this.counts++;
    this.updateCount();
  }

  decrementCount(item: any) {
    if (this.counts > 0) {
      this.counts--;
      this.updateCount();
    }
  }

  updateCount() {
    const totalCount = this.accordionItems.reduce((total, item) => total + this.counts, 0);
    this.customerendservice.setCount(totalCount);
  }
}
