import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { RouterModule } from '@angular/router';
import { CustomerCreateComponent } from '../customer-create/customer-create.component';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [RouterModule, CustomerCreateComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  customerData: any;
  currentDeleteIndex: number = 0;
  constructor(private customerService: CustomerService) {

  }
    ngOnInit(): void {
      this.customerService.getCustomers().subscribe((res:any) => {
        if (res) {
          this.customerData = res;
        }
      })
    }

    selectedCustomerData(event: Event, cData : any, isReadOnly: boolean) {
      if (!isReadOnly) {
        event.stopPropagation();
      }
      cData.isReadOnly = isReadOnly;
      this.customerService.selectedCustomerData$.next(cData);
    }

    onDeleteIcon(event: Event, i: number) {
      event.stopPropagation();
      this.currentDeleteIndex = i;
    }

    confirmDelete() {
      this.customerData.splice(this.currentDeleteIndex, 1);
    }
    checkDisabledClass(i: any){
      return true
    }
    toggleClass(i: any){}
}
