import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OrganizationService } from '../../../services/organization.service';
import { LocationDetailComponent } from '../location-detail/location-detail.component';

@Component({
  selector: 'app-organization',
  standalone: true,
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.scss',
  imports: [LocationDetailComponent]
})
export class OrganizationComponent implements OnInit{

  @ViewChild('locationDetailModal') locationDetailModal!: ElementRef;

  constructor(private organizationService: OrganizationService) {}

  organizationData: any;
  servingLocations: any;
  selectedLocationToShow: any;

  ngOnInit(): void {
    this.organizationService.getOrganizationData().subscribe((data: any) => {
      this.organizationData = data;
    });

    this.organizationService.getServingLocations().subscribe((locations: any[]) => {
      this.servingLocations = locations;
    });
  }

  showLocationDetails(location: any) {
    this.selectedLocationToShow = location;
    // this.openModal();
  }

  openModal() {
    this.locationDetailModal.nativeElement.classList.add('show');
    this.locationDetailModal.nativeElement.style.display = 'block';
  }
}
