import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ListingComponent } from '../../../components/listing/listing.component';
import { OrganizationService } from '../../../services/organization.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListingService } from '../../../services/listing.service';

@Component({
  selector: 'app-location-detail',
  standalone: true,
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.scss',
  imports: [ListingComponent, CommonModule, FormsModule]
})
export class LocationDetailComponent implements OnInit{

  constructor(private organizationService: OrganizationService, private route: ActivatedRoute, private listingService: ListingService){
    const id = parseInt(this.route.snapshot.paramMap.get("id") ?? "-1");
    if (id) {
      this.organizationService.getDataById(id).subscribe((location) => {
        this.selectedLocation = location;
      });
    }

    this.organizationService.getOrganizationData().subscribe((data) => {
      this.organizationData = data;
    })
  }

  @ViewChild('nameTemplate', { read: TemplateRef, static: true })
  nameTemplate!: TemplateRef<any>;

  @ViewChild('appliedTemplate', { read: TemplateRef, static: true })
  appliedTemplate!: TemplateRef<any>;

  @ViewChild('applied2Template', { read: TemplateRef, static: true })
  applied2Template!: TemplateRef<any>;

  @ViewChild('amountTemplate', { read: TemplateRef, static: true })
  amountTemplate!: TemplateRef<any>;

  selectedLocation: any;
  organizationData: any;
  taxAndFeesData: any;
  headers: {}[] = [];


  ngOnInit(): void {
    this.organizationService.getTaxAndFeesData().subscribe((data: any) => {
      this.taxAndFeesData = data;
    });

    this.headers = [
      { header: "Name", field: 'name', type: "template", templateRef: this.nameTemplate },
      { header: "Applied", field: 'applied', type: "template", templateRef: this.appliedTemplate },
      { header: "Applied", field: 'applied2', type: "template", templateRef: this.applied2Template },
      { header: "Amount", field: 'amount', type: "template", templateRef: this.amountTemplate },
    ];
    this.listingService.updateTableData(this.taxAndFeesData);

    this.listingService.deleteInitiated.subscribe(payload => {
      const index = payload.index;

      this.taxAndFeesData.splice(index, 1);
      this.listingService.updateTableData(this.taxAndFeesData);

    });
  }


  onChange(value: any, index: any) {
    this.taxAndFeesData[index].value = value;
  }

  addRow() {
    this.taxAndFeesData.push(
    {
      rowId: this.taxAndFeesData.length + 1,
      data: [
        { title: 'Name', field: 'name', value: '', type: 'template', templateRef: this.nameTemplate },
        { title: 'Applied', field: 'applied', value: '', type: 'template', templateRef: this.appliedTemplate },
        { title: 'Applied', field: 'applied2', value: '', type: 'template', templateRef: this.applied2Template },
        { title: 'Amount', field: 'amount', value: '', type: 'template', templateRef: this.amountTemplate }
      ]
    })
    this.listingService.updateTableData(this.taxAndFeesData);

  }
}
