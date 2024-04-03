import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-departure-arrival',
  standalone: true,
  templateUrl: './departure-arrival.component.html',
  styleUrl: './departure-arrival.component.scss',

})
export class DepartureArrivalComponent implements OnInit {
  @Input() headers: any[] = [];
  @Input() title: string = '';
  @Input() tableData: any;

  dataKeys:  string[] = [];

  ngOnInit(): void {
    if (this.tableData && this.tableData.length > 0) {
     this.tableData =  this.tableData.map((data: any) => {
        delete data.airlineName;
        return data;
      });
      this.dataKeys = Object.keys(this.tableData[0]);
      }
  }
}
