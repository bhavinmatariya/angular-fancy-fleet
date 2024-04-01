import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  standalone: true,
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent implements OnInit{
  @Input() headers: string[] = [];
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
