import { Component } from '@angular/core';
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
export class CustomerCreateComponent {
  customerForm: FormGroup;

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
   
  }

  onSubmit() {
    // Handle form submission
    console.log(this.customerForm.value);
    this.customerService.addCustomer(this.customerForm.value);
    this.router.navigate(['./customer/list']);
  }
}
