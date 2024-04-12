import { Component, Input, OnInit } from '@angular/core';
import { ListingComponent } from '../../../components/listing/listing.component';

@Component({
  selector: 'app-location-detail',
  standalone: true,
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.scss',
  imports: [ListingComponent]
})
export class LocationDetailComponent implements OnInit{

  @Input() selectedLocation: any;
  @Input() organizationData: any;

  ngOnInit(): void {

  }
}
