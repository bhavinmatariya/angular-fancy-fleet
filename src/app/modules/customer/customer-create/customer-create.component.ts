import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss'
})
export class CustomerCreateComponent implements OnDestroy{
  customerForm: FormGroup;
  isSelectedData: boolean = false;
  constructor(private fb: FormBuilder,private customerService: CustomerService,private router : Router) {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      licenseNumber: ['', Validators.required],
      licenseState: ['', [Validators.required]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      cardType: ['', Validators.required],
      cardNumber: ['', [Validators.required]],
      expiryDate: ['', [Validators.required]],
      currentRecord: ['', Validators.required],
      pastRecord: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.customerService.selectedCustomerData$.subscribe((res) => {
      if(res) {
        this.isSelectedData = true;
        this.customerForm.patchValue(res);
      }
    })
  }

  onSubmit() {
    this.customerService.addCustomer(this.customerForm.value);
    this.router.navigate(['./customer/list']);
  }

  ngOnDestroy(): void {
    this.customerService.selectedCustomerData$.next(null);
  }
}
