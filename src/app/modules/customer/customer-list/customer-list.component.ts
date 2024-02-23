import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  customerData: any;
  constructor(private customerService: CustomerService) {

  }
    ngOnInit(): void {
      this.customerService.getCustomers().subscribe((res:any) => {
        if (res) {
          this.customerData = res;
        }
      })
    }

    selectedCustomerData(cData : any) {
      this.customerService.selectedCustomerData$.next(cData);
    }
}
