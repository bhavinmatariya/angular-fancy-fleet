import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OrganizationService } from '../../../services/organization.service';
import { LocationDetailComponent } from '../location-detail/location-detail.component';
import { Router } from '@angular/router';
import { AddLocationComponent } from '../add-location/add-location.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-organization',
  standalone: true,
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.scss',
  imports: [LocationDetailComponent, AddLocationComponent, ReactiveFormsModule, GoogleMapsModule]
})
export class OrganizationComponent implements OnInit{

  addLocationForm!: FormGroup;
  @ViewChild('locationDetailModal') locationDetailModal!: ElementRef;

  constructor(private organizationService: OrganizationService, private router : Router, private fb: FormBuilder) {}

  organizationData: any;
  servingLocations: any;
  selectedLocationToShow: any;
  isEditServingLocation: boolean = false;
  selectedDeleteIndex: number = -1;
  selectedEditLocationId: any;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 0, lng: 0 },
    zoom : 16
  }
  marker = {
      position: { lat: 0, lng: 0 },
  }

  ngOnInit(): void {
    this.organizationService.getOrganizationData().subscribe((data: any) => {
      this.organizationData = data;

      this.mapOptions.center!.lat = this.organizationData.lat;
        this.mapOptions.center!.lng = this.organizationData.lng;

        this.marker.position!.lat = this.organizationData.lat;
        this.marker.position!.lng = this.organizationData.lng;
    });

    this.organizationService.getServingLocations().subscribe((locations: any[]) => {
      this.servingLocations = locations;
    });

    this.addLocationForm = this.fb.group({
      streetAddress: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      phone: ['', Validators.required],
      airportCode: ['', Validators.required],
      businessHoursFrom: ['', Validators.required],
      businessHoursTo: ['', Validators.required]
    });
  }

  showLocationDetails(location: any) {
    this.router.navigate([`organization/location-detail/${location.id}`]);
  }

  openModal() {
    this.locationDetailModal.nativeElement.classList.add('show');
    this.locationDetailModal.nativeElement.style.display = 'block';
  }

  onAddLocation() {
    this.addLocationForm.reset();
  }

  addLocation(){
    if (this.addLocationForm.valid) {
      let addLocation: any = {
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
      if (this.isEditServingLocation) {
        addLocation.id = this.selectedEditLocationId
      }
      this.addLocationForm.reset();
      this.organizationService.addLocation(addLocation, this.isEditServingLocation);
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
      // businessHoursFrom: new Date(location.workingHours.startTime),
      // businessHoursTo: new Date(location.workingHours.endTime),

      businessHoursFrom: location.workingHours.startTime,
      businessHoursTo: location.workingHours.endTime,
    }
    this.isEditServingLocation = true;
    this.selectedEditLocationId = location.id;
    this.addLocationForm.patchValue(patchData);
  }

  onDelete(index: number) {
    this.selectedDeleteIndex = index;
  }

  confirmDelete() {
    if (this.selectedDeleteIndex !== -1) {
      this.organizationService.deleteLocation(this.selectedDeleteIndex);
    }
  }
}
