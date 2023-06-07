import { Component } from '@angular/core';
import { CustomerPortalService } from '../customer-portal.service';
@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent {
  dishType:any='non-veg';
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

  getBadgeClass(dishType: string) {
    if (dishType === 'veg') {
      return 'badge badge-success';
    } else if (dishType === 'non-veg') {
      return 'badge badge-danger';
    } else if (dishType === 'egg') {
      return 'badge badge-warning';
    } else {
      return 'badge badge-secondary'; // Default badge color
    }
  }
}
