import { Component } from '@angular/core';
import { CustomerPortalService } from '../customer-portal.service';
@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent {
  constructor(
    private customerendservice:CustomerPortalService
   ) {
    // Customize accordion behavior
  }
  accordionItems = [
    { title: 'Accordion Item #1', content: 'Content for Accordion Item #1',count:0 },
    
  ];

  incrementCount(item: any) {
    item.count++;
    this.updateCount();
  }

  decrementCount(item: any) {
    if (item.count > 0) {
      item.count--;
      this.updateCount();
    }
  }

  updateCount() {
    const totalCount = this.accordionItems.reduce((total, item) => total + item.count, 0);
    this.customerendservice.setCount(totalCount);
  }
}
