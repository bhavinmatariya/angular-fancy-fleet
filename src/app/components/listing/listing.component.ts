import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
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
  @Input() isOneEditIconOnly: boolean = false;
  @Input() entity: number = -1;
  @Input() entityName = '';
  @Output() rowClicked: EventEmitter<any> = new EventEmitter();
  @Output() editClicked: EventEmitter<any> = new EventEmitter();

  dataKeys:  string[] = [];
  currentDeleteData: any = {};
  isVehicleTypeView: boolean = false;
  isVehicleClassView: boolean = false;
  // private subscription: Subscription;

  constructor(private listingService: ListingService, private route: ActivatedRoute) {
    this.listingService.tableData$.subscribe((data: any) => {
        if (data.entity === this.entityName && data.data) {
            this.tableData = data.data;
        } else if(!data.data) {
          this.tableData = data;
        }
      });
    }

    ngOnInit(): void {
    let snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const urlSegments: string[] = snapshot.url.map(segment => segment.path);
    this.isVehicleTypeView = urlSegments.includes('vehicle-types');
    this.isVehicleClassView = urlSegments.includes('vehicle-class');

    if (this.tableData && this.tableData.length > 0) {
     this.tableData =  this.tableData.map((data: any) => {
        delete data.airlineName;
        return data;
      });
      this.dataKeys = Object.keys(this.tableData[0]);
      }
  }

  onDeleteIcon(event: Event, componentName: string, i: number) {
    event.stopPropagation();
    this.currentDeleteData.componentName = componentName;
    this.currentDeleteData.index = i;
    if (this.entity !== -1 && this.entityName !== '') {
      this.currentDeleteData.entity = this.entity;
      this.currentDeleteData.entityName = this.entityName;
    }
  }

  confirmDelete() {
    const dataToEmit = { ...this.currentDeleteData };
    this.listingService.deleteInitiated.emit(dataToEmit);
    this.currentDeleteData = null;
  }

  toggleClass(i: number) {
    const idInput = 'input' + i;
    const elementInput = document?.getElementById(idInput);
    if (elementInput) {
      elementInput.classList.toggle('disabled');
    }

    const idInput2 = 'input2' + i;
    const elementInput2 = document?.getElementById(idInput2);
    if (elementInput2) {
      elementInput2.classList.toggle('disabled');
    }

    const idSelect = 'select' + i;
    const elementSelect = document?.getElementById(idSelect);
    if (elementSelect) {
      elementSelect.classList.toggle('disabled');
    }

    const idSelect2 = 'select2' + i;
    const elementSelect2 = document?.getElementById(idSelect2);
    if (elementSelect2) {
      elementSelect2.classList.toggle('disabled');
    }
  }

  checkDisabledClass(i: number): boolean {
    const id = 'input' + i;
    const element = document?.getElementById(id);
    if (element) {
      return element.classList.contains('disabled');
    }
    return false;
  }

  removeBrackets(value: string): string {
    return value.replace(/^\[|\]$/g, '');
  }

  onClickRow(row: any) {
    this.rowClicked.emit(row);
  }

  onClickEdit(event: Event, row: any, index: number) {
    this.editClicked.emit({event, row, index, entityName: this.entityName});
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
