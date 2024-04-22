import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DialogService } from '../../services/dialog.service';
import { DeleteConfirmModalComponent } from '../common/delete-confirm-modal/delete-confirm-modal.component';

@Component({
  selector: 'app-listing',
  standalone: true,
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
  imports: [CommonModule, DeleteConfirmModalComponent]
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
  isLocationDetailsView: boolean = false;
  // private subscription: Subscription;

  constructor(private listingService: ListingService, private route: ActivatedRoute, public dialogService: DialogService) {
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
    this.isLocationDetailsView = urlSegments.includes('location-detail');

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
    this.listingService.currentDeleteData.index = i;
    if (this.entity !== -1 && this.entityName !== '') {
      this.listingService.currentDeleteData.entity = this.entity;
      this.listingService.currentDeleteData.entityName = this.entityName;
    }
    this.dialogService.showConfirmDeleteDialog = true;
  }

  confirmDelete() {
    this.dialogService.showConfirmDeleteDialog = false;
    const dataToEmit = { ...this.listingService.currentDeleteData };
    this.listingService.deleteInitiated.emit(dataToEmit);
    // this.currentDeleteData = null;
    this.dialogService.showConfirmDeleteDialog = false;
  }

  toggleClass(i: number) {
    let idInput;
    let idInput2;
    let idSelect;
    let idSelect2;

    if (this.isLocationDetailsView) {
      idInput = 'input' + i + this.entityName;
      idInput2 = 'input2' + i + this.entityName;
      idSelect = 'select' + i + this.entityName;
      idSelect2 = 'select2' + i + this.entityName;
    } else {
      idInput = 'input' + i;
      idInput2 = 'input2' + i;
      idSelect = 'select' + i;
      idSelect2 = 'select2' + i;
    }
    const elementInput = document?.getElementById(idInput);
    if (elementInput) {
      elementInput.classList.toggle('disabled');
    }

    const elementInput2 = document?.getElementById(idInput2);
    if (elementInput2) {
      elementInput2.classList.toggle('disabled');
    }

    const elementSelect = document?.getElementById(idSelect);
    if (elementSelect) {
      elementSelect.classList.toggle('disabled');
    }

    const elementSelect2 = document?.getElementById(idSelect2);
    if (elementSelect2) {
      elementSelect2.classList.toggle('disabled');
    }
  }

  checkDisabledClass(i: number): boolean {

    let id: string;
    if (this.isLocationDetailsView) {
      id = 'input' + i + this.entityName;
    } else {
      id = 'input' + i;
    }
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
