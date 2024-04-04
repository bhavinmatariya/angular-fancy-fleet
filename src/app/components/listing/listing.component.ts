import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { Subscription } from 'rxjs';

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
  private subscription: Subscription;

  constructor(private listingService: ListingService) {
    this.subscription = this.listingService.tableData$.subscribe(data => {
      this.tableData = data;
    });
  }

  ngOnInit(): void {
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
    const id = 'input' + i;
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('disabled');
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
