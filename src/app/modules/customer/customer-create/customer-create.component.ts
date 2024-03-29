import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router, RouterModule, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

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
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }),
      addressDetails: this.fb.group({
        street: ['', Validators.required],
        street2: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required],
        country: ['', Validators.required],
      }),
      licenseDetails: this.fb.group({
        licenseNumber: ['', Validators.required],
        state: ['', Validators.required],
        endDate: ['', Validators.required],
      }),
      savedCreditCard: this.fb.group({
        cardNumber: ['', Validators.required],
        expiryDate: ['', Validators.required],
        cardType: ['', Validators.required],
      })
    });
   }

  ngOnInit(): void {
    this.customerService.selectedCustomerData$.subscribe((res) => {
      if(res) {
        this.isSelectedData = true;
        this.customerForm.patchValue(res);
        this.selectedCustomer = res;
      }
    })
    this.checkForCustomerView();

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
  }

  ngOnDestroy(): void {
    this.customerService.selectedCustomerData$.next(null);
  }
}
