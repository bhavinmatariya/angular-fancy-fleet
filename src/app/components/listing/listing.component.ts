import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-listing',
  standalone: true,
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
  imports: [CommonModule]
})
export class ListingComponent implements OnInit, OnDestroy{
  @Input() headers: any[] = [];
  @Input() title: string = '';
  @Input() tableData: any;

  dataKeys:  string[] = [];
  currentDeleteData: any = {};
  isVehicleTypeView: boolean = false;
  private subscription: Subscription;

  constructor(private listingService: ListingService, private route: ActivatedRoute) {
    this.subscription = this.listingService.tableData$.subscribe(data => {
      this.tableData = data;
    });
  }

  ngOnInit(): void {
    let snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const urlSegments: string[] = snapshot.url.map(segment => segment.path);
    this.isVehicleTypeView = urlSegments.includes('vehicle-types');

    if (this.tableData && this.tableData.length > 0) {
     this.tableData =  this.tableData.map((data: any) => {
        delete data.airlineName;
        return data;
      });
      this.dataKeys = Object.keys(this.tableData[0]);
      }

      this.listingService.tableData$.subscribe((data) => {
        this.tableData = data;
      })
  }

  onDeleteIcon(componentName: string, i: number) {
    this.currentDeleteData.componentName = componentName;
    this.currentDeleteData.index = i;
  }

  confirmDelete() {
    this.listingService.deleteInitiated.emit(this.currentDeleteData);
  }

  toggleClass(i: number) {
    const idInput = 'input' + i;
    const elementInput = document.getElementById(idInput);
    if (elementInput) {
      elementInput.classList.toggle('disabled');
    }

    const idSelect = 'select' + i;
    const elementSelect = document.getElementById(idSelect);
    if (elementSelect) {
      elementSelect.classList.toggle('disabled');
    }
  }

  checkDisabledClass(i: number): boolean {
    const id = 'input' + i;
    const element = document.getElementById(id);
    if (element) {
      return element.classList.contains('disabled');
    }
    return false;
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
