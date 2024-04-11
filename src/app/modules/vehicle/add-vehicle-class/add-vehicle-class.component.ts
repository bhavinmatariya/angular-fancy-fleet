import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DialogService } from '../../../services/dialog.service';
import { VehicleService } from '../../../services/vehicle.service';

@Component({
  selector: 'app-add-vehicle-class',
  standalone: true,
  templateUrl: './add-vehicle-class.component.html',
  styleUrl: './add-vehicle-class.component.scss',
  imports: [ReactiveFormsModule, NgMultiSelectDropDownModule],
})
export class AddVehicleClassComponent implements OnInit {
  @ViewChild('exampleModal') exampleModal: any; // Access the modal using ViewChild
  @ViewChild('openModalButton') openModalButton!: ElementRef;

  vehicleClassForm!: FormGroup;

  @Input() selectedData: any = null;
  @Output() classAdded: EventEmitter<any> = new EventEmitter();

  unsavedChanges: boolean = false;

  constructor(private fb: FormBuilder, public dialogService: DialogService, private vehicleService: VehicleService) {
    this.vehicleTypes = ['Car', 'Motorcycle', 'Limo'];
    this.vehicleClasses = {
      Car: ['Standard SUV', 'Full Size SUV'],
      Motorcycle: ['Cruiser', 'Dirt bike'],
      Limo: ['Stretch Limo', 'Luxury Sedan']
    };
    this.vehicleClassForm = this.fb.group({
      vehicleType: ['', Validators.required],
      class: ['', Validators.required],
      passenger: ['', Validators.required],
      active: ['', Validators.required],
      features: ['', Validators.required]
    });
  }

  vehicleTypes: string[] = [];
  vehicleClasses: any = [];
  selectedFeatures: any = [];

  features = [
    { item_id: 1, item_text: '5 Seates' },
    { item_id: 2, item_text: 'AC' },
    { item_id: 3, item_text: '3 Luggage' },
    { item_id: 4, item_text: 'Automatic' },
    { item_id: 5, item_text: 'Mild Hybrid' },
    { item_id: 6, item_text: 'Plugin Hybrid' },
    { item_id: 7, item_text: 'EV' },
  ];

  settings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: true,
    selectAllText: 'Select All',
    unSelectAllText: 'Unselect All',
    allowSearchFilter: true,
    limitSelection: -1,
    clearSearchFilter: true,
    maxHeight: 197,
    itemsShowLimit: 6,
    searchPlaceholderText: 'Search',
    noDataAvailablePlaceholderText: 'No data available',
    closeDropDownOnSelection: false,
    showSelectedItemsAtTop: true,
    defaultOpen: false,
  };

  ngOnInit(): void {
    if (this.selectedData && (this.dialogService.showEditVehicleClassModal || this.dialogService.showEditVehicleClassModalView)) {

      this.selectedFeatures = this.features.filter((feature: any) => this.selectedData.features.includes(feature.item_text));

      this.vehicleClassForm.patchValue(this.selectedData);
      this.vehicleClassForm.valueChanges.subscribe(value => {
        // this.selectedData = value;
        // this.vehicleService.updateEditedData(this.selectedData);

        this.checkUnsavedData();
      });
    } else {
      this.vehicleClassForm.reset();
    }
  }

  onVehicleTypeChange(): void {
    const selectedType = this.vehicleClassForm.get('vehicleType')?.value;
    this.vehicleClassForm.get('class')?.setValue('');
    if (selectedType) {
      this.vehicleClassForm.get('class')?.enable();
    } else {
      this.vehicleClassForm.get('class')?.disable();
    }
  }

  onSubmit() {
    const selectedFeatures = this.vehicleClassForm.get('features')?.value.map((feature: any) => feature.item_text);

    const addedVehicleClass = {
      vehicleType: this.vehicleClassForm.value.vehicleType,
      class: this.vehicleClassForm.value.class,
      passenger: this.vehicleClassForm.value.passenger,
      active: this.vehicleClassForm.value.active,
      features: selectedFeatures,
      noOfVehicles: 10, // Default value for now
    };

    if (this.selectedData) {
      this.vehicleService.updateEditedData(addedVehicleClass);
      this.dialogService.showEditVehicleClassModalView = false;
    } else {
      this.classAdded.emit(addedVehicleClass);
    }
    this.vehicleClassForm.reset();
  }

  checkUnsavedData() {
    const formData = JSON.parse(JSON.stringify(this.vehicleClassForm.value));

    let sData = this.selectedData;
    delete sData.id;
    delete sData.noOfVehicles;
    sData = JSON.parse(JSON.stringify(sData));

  const formDataKeys = Object.keys(formData).sort();
  const sDataKeys = Object.keys(sData).sort();

  this.openModalButton?.nativeElement?.removeAttribute('data-bs-toggle');
  this.openModalButton?.nativeElement?.removeAttribute('data-bs-target');

  if (JSON.stringify(formDataKeys) === JSON.stringify(sDataKeys)) {
    let areEqual = true;
    this.unsavedChanges = false;

    for (let key of formDataKeys) {
      if (JSON.stringify(formData[key]) !== JSON.stringify(sData[key])) {
        areEqual = false;
        break;
      }
    }
    if (!areEqual) {
      this.unsavedChanges = true;
      this.openModalButton?.nativeElement?.setAttribute('data-bs-toggle', 'modal');
      this.openModalButton?.nativeElement?.setAttribute('data-bs-target', '#exampleModal');
    } else {
      // this.closeForm();
      this.unsavedChanges = false;
    }
  } else {
    this.unsavedChanges = true;
    if (this.openModalButton) {
      this.openModalButton?.nativeElement?.setAttribute('data-bs-toggle', 'modal');
      this.openModalButton?.nativeElement?.setAttribute('data-bs-target', '#exampleModal');
    }

  }
  }

  onCancel() {
    if (!this.unsavedChanges) {
      this.closeModalWithoutSaving();
    }
  }

  closeForm(): void {
    this.openModalButton.nativeElement.removeAttribute('data-bs-toggle');
    this.openModalButton.nativeElement.removeAttribute('data-bs-target');
    this.dialogService.showAddVehicleClassModal = false;
    this.dialogService.showEditVehicleClassModal = false;
    this.dialogService.showEditVehicleClassModalView = false;
    this.unsavedChanges = false;
  }

  closeModalWithoutSaving(): void {
    this.closeForm();
  }

}
