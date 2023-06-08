import { Component, OnInit } from '@angular/core';
import { CustomerPortalService } from './customer-portal.service';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-customer-portal',
  templateUrl: './customer-portal.component.html',
  styleUrls: ['./customer-portal.component.scss']
})
export class CustomerPortalComponent implements OnInit{
  isOrderPlacedVisible = false;
  count:any=0;
  accordionItems = [
    { title: 'Briyani', content: 'Content for Accordion Item #1',count:0 },
    { title: 'Briyani', content: 'Content for Accordion Item #1',count:0 },
    { title: 'Briyani', content: 'Content for Accordion Item #1',count:0 },
   
  ];

  constructor(config: NgbAccordionConfig,
    private customerendService:CustomerPortalService
   ) {
    // Customize accordion behavior
    config.closeOthers = true;
  }

  ngOnInit() {

    this.customerendService.getCount().subscribe(count => {
      this.isOrderPlacedVisible = count > 0;
    });

    this.getcount();
  }

  getcount(){
    this.customerendService.getCount().subscribe(
      count=>{
        this.count=count;
      }
    )
  }
}
