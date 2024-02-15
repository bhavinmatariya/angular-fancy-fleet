import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss'
})
export class CustomerCreateComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder,private customerService: CustomerService,private router : Router) {
    this.customerForm = this.fb.group({
      firstName: ['Emma', Validators.required],
      lastName: ['Lopez', Validators.required],
      phoneNumber: ['+1666555444', [Validators.required, Validators.pattern(/^\+\d{10,}$/)]],
      email: ['emma.lopez@example.com', [Validators.required, Validators.email]],
      streetAddress: ['999 Maple St', Validators.required],
      city: ['Downton', Validators.required],
      state: ['NY', [Validators.required, Validators.maxLength(2)]],
      postalCode: ['74185', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      licenseNumber: ['L741852963', Validators.required],
      licenseState: ['NY', [Validators.required, Validators.maxLength(2)]],
      startDate: ['2023-12-01', Validators.required],
      endDate: ['2024-12-01', Validators.required],
      cardType: ['Discover', Validators.required],
      cardNumber: ['************7890', [Validators.required, Validators.pattern(/^\*{12}\d{4}$/)]],
      expiryDate: ['12/24', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
      currentRecord: ['R-23134', Validators.required],
      pastRecord: ['467', Validators.required]
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
