import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OrganizationService } from '../../../services/organization.service';
import { LocationDetailComponent } from '../location-detail/location-detail.component';
import { Router } from '@angular/router';
import { AddLocationComponent } from '../add-location/add-location.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-organization',
  standalone: true,
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.scss',
  imports: [LocationDetailComponent, AddLocationComponent, ReactiveFormsModule]
})
export class OrganizationComponent implements OnInit{

  addLocationForm!: FormGroup;
  @ViewChild('locationDetailModal') locationDetailModal!: ElementRef;

  constructor(private organizationService: OrganizationService, private router : Router, private fb: FormBuilder) {}

  organizationData: any;
  servingLocations: any;
  selectedLocationToShow: any;
  isEditServingLocation: boolean = false;

  ngOnInit(): void {
    this.organizationService.getOrganizationData().subscribe((data: any) => {
      this.organizationData = data;
    });

    this.organizationService.getServingLocations().subscribe((locations: any[]) => {
      this.servingLocations = locations;
    });

    this.addLocationForm = this.fb.group({
      streetAddress: ['', Validators.required],
      country: ['United States', Validators.required],
      state: ['TX', Validators.required],
      city: ['The Woodlands', Validators.required],
      postalCode: ['', Validators.required],
      phone: ['', Validators.required],
      airportCode: ['', Validators.required],
      businessHoursFrom: ['', Validators.required],
      businessHoursTo: ['', Validators.required]
    });
  }

  showLocationDetails(location: any) {
    // this.selectedLocationToShow = location;
    // this.openModal();

    this.router.navigate([`organization/location-detail/${location.id}`]);
    // this.router.navigate([`organization/location-detail`]);
  }

  openModal() {
    this.locationDetailModal.nativeElement.classList.add('show');
    this.locationDetailModal.nativeElement.style.display = 'block';
  }

  addLocation(){
    if (this.addLocationForm.valid) {
      let addLocation = {
        address: {
          streetAddress: this.addLocationForm.get('streetAddress')?.value,
          city: this.addLocationForm.get('city')?.value,
          state: this.addLocationForm.get('state')?.value,
          postalCode: this.addLocationForm.get('postalCode')?.value,
          country: this.addLocationForm.get('country')?.value,
          phoneNumber: this.addLocationForm.get('phoneNumber')?.value,
        },
        airportCode: this.addLocationForm.get('airportCode')?.value,
        workingHours: {
          startTime: this.addLocationForm.get('businessHoursFrom')?.value,
          endTime: this.addLocationForm.get('businessHoursTo')?.value,
        }
      }
      this.organizationService.addLocation(addLocation);
    } else {
      console.log('Form is Invalid');
    }
  }

  onEdit(location: any) {
    // this.router.navigate([`organization/edit-location-detail/${location.id}`]);
    const patchData = {
      streetAddress: location.address.streetAddress,
      country: location.address.country,
      state: location.address.state,
      city: location.address.city,
      postalCode: location.address.postalCode,
      phone: location.address.phoneNumber,
      airportCode: location.airportCode,
      businessHoursFrom: location.workingHours.startTime,
      businessHoursTo: location.workingHours.startTime,
    }
    this.isEditServingLocation = true;
    this.addLocationForm.patchValue(patchData);
  }
}
