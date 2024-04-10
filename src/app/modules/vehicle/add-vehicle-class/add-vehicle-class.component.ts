import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  vehicleClassForm!: FormGroup;

  @Input() selectedData: any;
  @Output() classAdded: EventEmitter<any> = new EventEmitter();


  constructor(private fb: FormBuilder, public dialogService: DialogService, private vehicleService: VehicleService) {
    this.vehicleTypes = ['Car', 'Motorcycle', 'Limo'];
    this.vehicleClassForm = this.fb.group({
      vehicleType: ['', Validators.required],
      class: ['', Validators.required],
      passenger: ['', Validators.required],
      active: ['', Validators.required],
      features: ['', Validators.required]
    });
  }
  vehicleTypes: string[] = [];
  isAddModal: boolean = false;


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
    if(this.selectedData) {
      this.vehicleClassForm.patchValue(this.selectedData);
      this.vehicleClassForm.valueChanges.subscribe(value => {
        this.selectedData = value;
        this.vehicleService.updateEditedData(this.selectedData);
      });
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
    this.classAdded.emit(addedVehicleClass);
    this.vehicleClassForm.reset();
  }
}
