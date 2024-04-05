import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router, RouterModule, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-create',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule, CommonModule],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss'
})
export class CustomerCreateComponent implements OnDestroy{
  customerForm: FormGroup;
  isSelectedData: boolean = false;
  containsCustomerView: boolean = false;
  isReadOnly: boolean = true;
  selectedCustomer: any;

  states: string[] = [
    "California",
    "New York",
    "Texas",
    "Florida",
    "Illinois",
    "Pennsylvania",
    "Ohio",
    "Georgia",
    "North Carolina",
    "Michigan",
  ];
  cities: string[] = [
    "New York City",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Francisco",
    "Smallville"
  ];

  constructor(private fb: FormBuilder,private customerService: CustomerService,private router : Router, private route: ActivatedRoute) {
    this.customerForm = this.fb.group({
      customerDetails: this.fb.group({
        firstName: [''],
        lastName: [''],
        phoneNumber: [''],
        email: ['', [Validators.required, Validators.email]],
      }),
      addressDetails: this.fb.group({
        street: [''],
        street2: [''],
        city: [''],
        state: [''],
        zip: [''],
        country: [''],
      }),
      licenseDetails: this.fb.group({
        licenseNumber: [''],
        state: [''],
        endDate: [''],
      }),
      savedCreditCard: this.fb.group({
        cardNumber: [''],
        expiryDate: [''],
        cardType: [''],
      })
    });
   }

  ngOnInit(): void {
    this.checkForCustomerView();
    this.customerService.selectedCustomerData$.subscribe((res) => {
      if(res) {
        this.isReadOnly = res.isReadOnly;
        this.isSelectedData = true;
        this.customerForm.patchValue(res);
        this.selectedCustomer = res;
      }
    })

    this.customerForm.valueChanges.subscribe(value => {
      this.selectedCustomer.customerDetails = value.customerDetails;
      this.selectedCustomer.addressDetails = value.addressDetails;
      this.selectedCustomer.licenseDetails = value.licenseDetails;
      this.selectedCustomer.savedCreditCard = value.savedCreditCard;
    });
  }

  onSubmit() {
    this.customerService.addCustomer(this.customerForm.value);
    this.router.navigate(['./customer/list']);
  }

  checkForCustomerView(): void {
    let snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const urlSegments: string[] = snapshot.url.map(segment => segment.path);
    this.containsCustomerView = urlSegments.includes('view');
    // this.isReadOnly = !urlSegments.includes('add');
    urlSegments.includes('add') ? this.isReadOnly = false : this.isReadOnly = true;

  }

  ngOnDestroy(): void {
    this.customerService.selectedCustomerData$.next(null);
  }
}
