import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '../../../services/dialog.service';
import { AddVehicleClassComponent } from '../add-vehicle-class/add-vehicle-class.component';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../../services/vehicle.service';

@Component({
  selector: 'app-view-vehicle-class',
  standalone: true,
  templateUrl: './view-vehicle-class.component.html',
  styleUrl: './view-vehicle-class.component.scss',
  imports: [AddVehicleClassComponent]
})
export class ViewVehicleClassComponent implements OnInit{

  selectedRowData: any;
  constructor(public dialogService: DialogService, private vehicleService: VehicleService,
    private route: ActivatedRoute,
    public router: Router,

  ) {
    const id = parseInt(this.route.snapshot.paramMap.get("id") ?? "-1");

    if (id) {
      this.vehicleService.getVehicleClassById(id).subscribe((value) => {
        this.selectedRowData = value;
      });
    }
  }


  ngOnInit(): void {
  }

  onCancel() {
    this.router.navigate(['vehicle/vehicle-class']);
  }

  onEdit() {
    this.router.navigate([`vehicle/edit-vehicle-class/${this.selectedRowData.id}`]);
  }
}
