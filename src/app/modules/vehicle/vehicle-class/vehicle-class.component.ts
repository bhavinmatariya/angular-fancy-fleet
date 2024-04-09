import { Component, OnInit } from "@angular/core";
import { ListingComponent } from "../../../components/listing/listing.component";
import { ListingService } from "../../../services/listing.service";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

@Component({
  selector: "app-vehicle-class",
  standalone: true,
  templateUrl: "./vehicle-class.component.html",
  styleUrl: "./vehicle-class.component.scss",
  imports: [ListingComponent, ReactiveFormsModule, CommonModule, NgMultiSelectDropDownModule],
})
export class VehicleClassComponent implements OnInit {
  vehicleClassForm!: FormGroup;

  constructor(private listingService: ListingService, private fb: FormBuilder) {
    this.vehicleTypes = ['Car', 'Motorcycle', 'Limo']

    this.vehicleClassForm = this.fb.group({
      vehicleType: ['', Validators.required],
      name: ['', Validators.required],
      passenger: ['', Validators.required],
      active: ['', Validators.required],
      features: ['', Validators.required]
    });
  }

  vehicleClassData: any = [];
  headers: {}[] = [];
  columnWidths: string[] = [];
  isAddModal: boolean = false;
  isEditModal: boolean = false;
  vehicleTypes: string[] = [];
  selectedFormFeture: string[] = [];

  features = [
    { item_id: 1, item_text: '5 Seates'},
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
    itemsShowLimit: 3,
    searchPlaceholderText: 'Search',
    noDataAvailablePlaceholderText: 'No data available',
    closeDropDownOnSelection: false,
    showSelectedItemsAtTop: true,
    defaultOpen: false,
  };

  ngOnInit(): void {

    this.vehicleClassData = [
      {
        name: "Full Size SUV",
        vehicleType: "Car",
        passenger: 7,
        features: ["5 Seates", "AC"],
        noOfVehicles: 10,
        active: "Yes",
      },
      {
        name: "Full Size SUV",
        vehicleType: "Car",
        passenger: 7,
        features: ["5 Seates", "AC"],
        noOfVehicles: 10,
        active: "Yes",
      },
      {
        name: "Full Size SUV",
        vehicleType: "Car",
        passenger: 7,
        features: ["5 Seates", "AC"],
        noOfVehicles: 10,
        active: "Yes",
      },
      {
        name: "Full Size SUV",
        vehicleType: "Car",
        passenger: 7,
        features: ["5 Seates", "AC"],
        noOfVehicles: 10,
        active: "Yes",
      }
    ];

    this.headers = [
      { header: "Name", field: 'name',type: "label", width: "25%" },
      { header: "Vehicle Type", field: 'vehicleType',type: "label", width: "10%" },
      { header: "Passenger", field: 'passenger', type: "label", width: "10%" },
      { header: "Features", field: 'features', type: "label", width: "32%" },
      { header: "# of vehicles", field: 'noOfVehicles', type: "label", width: "10%" },
      { header: "Active", field: 'active', type: "label", width: "8%" },
    ];

    this.listingService.updateTableData(this.vehicleClassData);

    this.listingService.deleteInitiated.subscribe(payload => {
      const componentName = payload.componentName;
      const index = payload.index;

      if (componentName === 'vehicle-types') {
        this.vehicleClassData.splice(index, 1);
        this.listingService.updateTableData(this.vehicleClassData);
      }


    });

  }

  public onItemSelect(item: any, type: string) {
    this.selectedFormFeture.push(item);
  }

  public onDeSelect(item: any, type: string) {

  }

  public onSelectAll(items: any, type: string) {
    this.selectedFormFeture.push(items);
  }

  public onDeSelectAll(items: any, type: string) {

  }

  onSubmit() {
    console.log('this.vehicleClassForm', this.vehicleClassForm.value);
    this.vehicleClassData.push(this.vehicleClassForm.value);
    this.isAddModal = false;
  }
}
