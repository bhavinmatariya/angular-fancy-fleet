import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ListingComponent } from '../../../components/listing/listing.component';
import { OrganizationService } from '../../../services/organization.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListingService } from '../../../services/listing.service';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-location-detail',
  standalone: true,
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.scss',
  imports: [ListingComponent, CommonModule, FormsModule, GoogleMapsModule, ReactiveFormsModule]
})
export class LocationDetailComponent implements OnInit{

  constructor(private organizationService: OrganizationService, private route: ActivatedRoute, private listingService: ListingService, private fb: FormBuilder){
    const id = parseInt(this.route.snapshot.paramMap.get("id") ?? "-1");
    if (id) {
      this.organizationService.getDataById(id).subscribe((location) => {
        this.selectedLocation = location;
        this.mapOptions.center!.lat = this.selectedLocation.lat;
        this.mapOptions.center!.lng = this.selectedLocation.lng;

        this.marker.position!.lat = this.selectedLocation.lat;
        this.marker.position!.lng = this.selectedLocation.lng;
      });
    }

    this.organizationService.getOrganizationData().subscribe((data) => {
      this.organizationData = data;
    })
  }

  addEntityForm!: FormGroup;

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
  options: any;
  isEditEntity: boolean = false;
  selectedEditEntityId: any;
  selectedDeleteEntity: any;
  mapOptions: google.maps.MapOptions = {
    center: { lat: 0, lng: 0 },
    zoom : 16
  }
  marker = {
      position: { lat: 0, lng: 0 },
  }


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
    // this.listingService.updateTableData(this.taxAndFeesData);

    this.listingService.deleteInitiated.subscribe((payload: any) => {
      const index = payload.index;
      const entity = payload.entity;
      const entityName = payload.entityName;

      this.taxAndFeesData[entity].taxAndFees.splice(index, 1);
      // this.listingService.updateTableData(this.taxAndFeesData);
      this.listingService.updateTableData({data: this.taxAndFeesData[entity].taxAndFees, entity: entityName});

    });

    this.addEntityForm = this.fb.group({
      entity: ['', Validators.required],
      streetAddress: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }


  onChange(value: any, index: any) {
    this.taxAndFeesData[index].value = value;
  }

  addRow(index: number, entity: string) {
    this.taxAndFeesData[index].taxAndFees.push(
    {
      name: '',
      applied: '',
      applied2: '',
      amount: ''
    }
  )
    this.listingService.updateTableData({data: this.taxAndFeesData[index].taxAndFees, entity: entity});

  }

  onAddEntity() {
    this.addEntityForm.reset();
  }

  addEntity(){
    if (this.addEntityForm.valid) {
      let addEntity: any = {
          entity: this.addEntityForm.get('entity')?.value,
          taxAndFees: []
      }
      // if (this.isEditEntity) {
      //   addEntity.id = this.selectedEditEntityId
      // }
      // this.addEntityForm.reset();
      // this.taxAndFeesData.push(addEntity);
      this.organizationService.addEntity(addEntity, this.isEditEntity).subscribe((res: any) => {
        if (res) {
          // this.taxAndFeesData = res;
          // setTimeout(() => {
          //   this.listingService.updateTableData(res);
          // }, 1000);
          // this.taxAndFeesData = res;
          // this.taxAndFeesData[this.taxAndFeesData.length].push({
          //   data: [
          //     { title: 'Name', field: 'name', value: '', type: 'template', templateRef: this.nameTemplate },
          //     { title: 'Applied', field: 'applied', value: '', type: 'template', templateRef: this.appliedTemplate },
          //     { title: 'Applied', field: 'applied2', value: '', type: 'template', templateRef: this.applied2Template },
          //     { title: 'Amount', field: 'amount', value: '', type: 'template', templateRef: this.amountTemplate }
          //   ]
          // });
        }
      })
    } else {
      console.log('Form is Invalid');
    }
  }

  onEdit(location: any) {
    // this.router.navigate([`organization/edit-location-detail/${location.id}`]);
    // event.stopPropagation();
    const patchData = {
      // streetAddress: location.address.streetAddress,
      // country: location.address.country,
      // state: location.address.state,
      // city: location.address.city,
      // postalCode: location.address.postalCode,
      // phone: location.address.phoneNumber,
      entity: location.entity,
    }
    this.isEditEntity = true;
    this.selectedEditEntityId = location.id;
    this.addEntityForm.patchValue(patchData);
  }

  onDelete(data: any) {
    this.selectedDeleteEntity = data.entity;
  }

  confirmDelete() {
    const index = this.taxAndFeesData.findIndex((e: any) => e.entity === this.selectedDeleteEntity);

    if (index !== -1) {
        this.taxAndFeesData.splice(index, 1);
    } else {
        console.log("Entity 'Government' not found.");
    }
  }

  onEditClicked(event: any) {
    console.log('Event:::', event);
  }
}
