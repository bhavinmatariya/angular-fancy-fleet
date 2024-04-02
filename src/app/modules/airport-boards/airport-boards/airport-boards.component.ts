import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ListingComponent } from '../../../components/listing/listing.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-airport-boards',
  standalone: true,
  imports: [ListingComponent,  NgMultiSelectDropDownModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './airport-boards.component.html',
  styleUrl: './airport-boards.component.scss'
})
export class AirportBoardsComponent implements OnInit {
  departureHeaders: string[] = ['Airline', 'Flight No', 'From', 'Scheduled', 'Estimated', 'Status'];
  arrivalHeaders: string[] = ['Airline', 'Flight No', 'To', 'Scheduled', 'Estimated', 'Status'];
  departedHeaders: string[] =[];
  arrivedHeaders: string[] =[];
  currentFilter: number = 2;
  activeFilter: string = "resetToNow"

  departureData: {}[] = [
    {
      "airline": "https://1000logos.net/wp-content/uploads/2020/03/Hawaiian-Airlines-Logo.png",
      "airlineName": "Hawaiian",
      "flightNo": "AA123",
      "from": "Los Angeles (LAX)",
      "scheduled": "10:15 AM",
      "estimated": "10:30 AM",
      "status": "On Time"
    },
    {
      "airline": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc3YWdl36w4aj1icy2pBiQbgNkkA_3WitorqB9cxvVZAMczwtq2eMzjLe1VfUMbx9zX0&usqp=CAU",
      "airlineName": "Alaska",
      "flightNo": "EK567",
      "from": "Dubai (DXB)",
      "scheduled": "03:45 PM",
      "estimated": "04:00 PM",
      "status": "Boarding"
    },
    {
      "airline": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc3YWdl36w4aj1icy2pBiQbgNkkA_3WitorqB9cxvVZAMczwtq2eMzjLe1VfUMbx9zX0&usqp=CAU",
      "airlineName": "Alaska",
      "flightNo": "LH101",
      "from": "Frankfurt (FRA)",
      "scheduled": "11:00 AM",
      "estimated": "10:45 AM",
      "status": "Early Arrival"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2017/06/United-Airlines-Logo-500x313.png",
      "airlineName": "United",
      "flightNo": "CX789",
      "from": "Hong Kong (HKG)",
      "scheduled": "07:15 PM",
      "estimated": "Delayed",
      "status": "N/A"
    },
    {
      "airline": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc3YWdl36w4aj1icy2pBiQbgNkkA_3WitorqB9cxvVZAMczwtq2eMzjLe1VfUMbx9zX0&usqp=CAU",
      "airlineName": "Alaska",
      "flightNo": "AF321",
      "from": "Paris (CDG)",
      "scheduled": "09:30 AM",
      "estimated": "09:30 AM",
      "status": "On Time"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2019/08/southwest-airlines-logo-500x226.png",
      "airlineName": "Southwest",
      "flightNo": "SQ234",
      "from": "Singapore (SIN)",
      "scheduled": "01:00 PM",
      "estimated": "Cancelled",
      "status": "N/A"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2019/08/southwest-airlines-logo-500x226.png",
      "airlineName": "Southwest",
      "flightNo": "DL786",
      "from": "Atlanta (ATL)",
      "scheduled": "12:45 PM",
      "estimated": "12:30 PM",
      "status": "Early Arrival"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2017/06/United-Airlines-Logo-500x313.png",
      "airlineName": "United",
      "flightNo": "KL654",
      "from": "Amsterdam (AMS)",
      "scheduled": "05:00 PM",
      "estimated": "05:15 PM",
      "status": "On Time"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2017/06/United-Airlines-Logo-500x313.png",
      "airlineName": "United",
      "flightNo": "QF129",
      "from": "Sydney (SYD)",
      "scheduled": "02:15 AM",
      "estimated": "02:30 AM",
      "status": "On Time"
    },
    {
      "airline": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc3YWdl36w4aj1icy2pBiQbgNkkA_3WitorqB9cxvVZAMczwtq2eMzjLe1VfUMbx9zX0&usqp=CAU",
      "airlineName": "Alaska",
      "flightNo": "EY456",
      "from": "Abu Dhabi (AUH)",
      "scheduled": "08:45 AM",
      "estimated": "08:45 AM",
      "status": "On Time"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2020/03/Hawaiian-Airlines-Logo.png",
      "airlineName": "Hawaiian",
      "flightNo": "AA123",
      "from": "Los Angeles (LAX)",
      "scheduled": "09:15 AM",
      "estimated": "09:30 AM",
      "status": "On Time"
    },
    {
      "airline": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc3YWdl36w4aj1icy2pBiQbgNkkA_3WitorqB9cxvVZAMczwtq2eMzjLe1VfUMbx9zX0&usqp=CAU",
      "airlineName": "Alaska",
      "flightNo": "EK567",
      "from": "Dubai (DXB)",
      "scheduled": "12:45 PM",
      "estimated": "01:00 PM",
      "status": "Boarding"
    },
    {
      "airline": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc3YWdl36w4aj1icy2pBiQbgNkkA_3WitorqB9cxvVZAMczwtq2eMzjLe1VfUMbx9zX0&usqp=CAU",
      "airlineName": "Alaska",
      "flightNo": "LH101",
      "from": "Frankfurt (FRA)",
      "scheduled": "11:00 AM",
      "estimated": "10:45 AM",
      "status": "Early Arrival"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2017/06/United-Airlines-Logo-500x313.png",
      "airlineName": "United",
      "flightNo": "CX789",
      "from": "Hong Kong (HKG)",
      "scheduled": "07:15 PM",
      "estimated": "07:30 PM",
      "status": "N/A"
    },
    {
      "airline": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc3YWdl36w4aj1icy2pBiQbgNkkA_3WitorqB9cxvVZAMczwtq2eMzjLe1VfUMbx9zX0&usqp=CAU",
      "airlineName": "Alaska",
      "flightNo": "AF321",
      "from": "Paris (CDG)",
      "scheduled": "09:30 PM",
      "estimated": "09:30 PM",
      "status": "On Time"
    },
  ]

  arrivalData: {}[] = [
    {
      "airline": "https://1000logos.net/wp-content/uploads/2017/06/United-Airlines-Logo-500x313.png",
      "airlineName": "United",
      "flightNo": "AA123",
      "to": "Los Angeles (LAX)",
      "scheduled": "10:15 AM",
      "estimated": "10:30 AM",
      "status": "On Time"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2019/08/southwest-airlines-logo-500x226.png",
      "airlineName": "Southwest",
      "flightNo": "EK567",
      "to": "Dubai (DXB)",
      "scheduled": "03:45 PM",
      "estimated": "04:00 PM",
      "status": "Boarding"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2019/08/southwest-airlines-logo-500x226.png",
      "airlineName": "Southwest",
      "flightNo": "LH101",
      "to": "Frankfurt (FRA)",
      "scheduled": "11:00 AM",
      "estimated": "10:45 AM",
      "status": "Early Arrival"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2019/08/southwest-airlines-logo-500x226.png",
      "airlineName": "Southwest",
      "flightNo": "CX789",
      "to": "Hong Kong (HKG)",
      "scheduled": "07:15 PM",
      "estimated": "Delayed",
      "status": "N/A"
    },
    {
      "airline": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc3YWdl36w4aj1icy2pBiQbgNkkA_3WitorqB9cxvVZAMczwtq2eMzjLe1VfUMbx9zX0&usqp=CAU",
      "airlineName": "Alaska",
      "flightNo": "AF321",
      "to": "Paris (CDG)",
      "scheduled": "09:30 AM",
      "estimated": "09:30 AM",
      "status": "On Time"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2017/06/United-Airlines-Logo-500x313.png",
      "airlineName": "United",
      "flightNo": "SQ234",
      "to": "Singapore (SIN)",
      "scheduled": "01:00 PM",
      "estimated": "Cancelled",
      "status": "N/A"
    },
    {
      "airline": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc3YWdl36w4aj1icy2pBiQbgNkkA_3WitorqB9cxvVZAMczwtq2eMzjLe1VfUMbx9zX0&usqp=CAU",
      "airlineName": "Alaska",
      "flightNo": "DL786",
      "to": "Atlanta (ATL)",
      "scheduled": "12:45 PM",
      "estimated": "12:30 PM",
      "status": "Early Arrival"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2017/06/United-Airlines-Logo-500x313.png",
      "airlineName": "United",
      "flightNo": "KL654",
      "to": "Amsterdam (AMS)",
      "scheduled": "05:00 PM",
      "estimated": "05:15 PM",
      "status": "On Time"
    },
    {
      "airline": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc3YWdl36w4aj1icy2pBiQbgNkkA_3WitorqB9cxvVZAMczwtq2eMzjLe1VfUMbx9zX0&usqp=CAU",
      "airlineName": "Alaska",
      "flightNo": "QF129",
      "to": "Sydney (SYD)",
      "scheduled": "02:15 AM",
      "estimated": "02:30 AM",
      "status": "On Time"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2019/08/southwest-airlines-logo-500x226.png",
      "airlineName": "Southwest",
      "flightNo": "EY456",
      "to": "Abu Dhabi (AUH)",
      "scheduled": "08:45 AM",
      "estimated": "08:45 AM",
      "status": "On Time"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2017/06/United-Airlines-Logo-500x313.png",
      "airlineName": "United",
      "flightNo": "AA123",
      "to": "Los Angeles (LAX)",
      "scheduled": "10:15 PM",
      "estimated": "10:30 PM",
      "status": "On Time"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2019/08/southwest-airlines-logo-500x226.png",
      "airlineName": "Southwest",
      "flightNo": "EK567",
      "to": "Dubai (DXB)",
      "scheduled": "03:45 PM",
      "estimated": "04:00 PM",
      "status": "Boarding"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2019/08/southwest-airlines-logo-500x226.png",
      "airlineName": "Southwest",
      "flightNo": "LH101",
      "to": "Frankfurt (FRA)",
      "scheduled": "09:00 AM",
      "estimated": "09:15 AM",
      "status": "Early Arrival"
    },
    {
      "airline": "https://1000logos.net/wp-content/uploads/2019/08/southwest-airlines-logo-500x226.png",
      "airlineName": "Southwest",
      "flightNo": "CX789",
      "to": "Hong Kong (HKG)",
      "scheduled": "07:15 PM",
      "estimated": "07:15 PM",
      "status": "N/A"
    },
    {
      "airline": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc3YWdl36w4aj1icy2pBiQbgNkkA_3WitorqB9cxvVZAMczwtq2eMzjLe1VfUMbx9zX0&usqp=CAU",
      "airlineName": "Alaska",
      "flightNo": "AF321",
      "to": "Paris (CDG)",
      "scheduled": "09:30 AM",
      "estimated": "09:30 AM",
      "status": "On Time"
    },
  ]
  departedData: {}[] = [];
  arrivedData: {}[] = [];
  originalDepartureData: {}[] = [];
  originalArrivalData: {}[] = [];

  toSentDepartureData = JSON.parse(JSON.stringify(this.departureData));
  toSentlArrivalData = JSON.parse(JSON.stringify(this.arrivalData));

  airlines = [
    { item_id: 1, item_text: 'Hawaiian' },
    { item_id: 2, item_text: 'Alaska' },
    { item_id: 3, item_text: 'United' },
    { item_id: 4, item_text: 'Southwest' },
  ];
  from = [
    { item_id: 1, item_text: 'New York' },
    { item_id: 2, item_text: 'Los Angeles' },
    { item_id: 3, item_text: 'Dubai' },
    { item_id: 4, item_text: 'Hong Kong' },
    { item_id: 4, item_text: 'Paris' },
  ];
  to = [
    { item_id: 1, item_text: 'New York' },
    { item_id: 2, item_text: 'Los Angeles' },
    { item_id: 3, item_text: 'Dubai' },
    { item_id: 4, item_text: 'Hong Kong' },
    { item_id: 4, item_text: 'Paris' },
  ];
  airlineFilters: string[] = [];

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
      // this.originalDepartureData = [...this.departureData];
      // this.originalArrivalData = [...this.arrivalData];

      this.originalDepartureData = JSON.parse(JSON.stringify(this.departureData));
      this.originalArrivalData = JSON.parse(JSON.stringify(this.arrivalData));
  }

  filterWithTopLevelFilter(filter: number) {
    const date = new Date();
    const currentTime = date.getHours() * 60 + date.getMinutes();
    const filterTime = Math.abs(filter) * 60 * 60 * 1000;

    const filteredDepartures = this.originalDepartureData.filter((data: any) => {
      const scheduledTime = this.getTimeFromString(data.scheduled);
      const diff = this.getDifferenceInMinutes(scheduledTime, currentTime);
      const flightTimestamp = new Date().setHours(scheduledTime.hours, scheduledTime.minutes);

      if (filter < 0) {
        // For previous hours, check if scheduled time is before current time and within the interval
        return diff <= filterTime && diff >= 0 && flightTimestamp <= Date.now();
      } else {
        // For next hours, check if scheduled time is after current time and within the interval
        return diff <= filterTime && diff >= 0 && flightTimestamp >= Date.now();
      }
    });

    const filteredArrivals = this.originalArrivalData.filter((data: any) => {
      const scheduledTime = this.getTimeFromString(data.scheduled);
      const diff = this.getDifferenceInMinutes(scheduledTime, currentTime);
      const flightTimestamp = new Date().setHours(scheduledTime.hours, scheduledTime.minutes);

      if (filter < 0) {
        // For previous hours, check if scheduled time is before current time and within the interval
        return diff <= filterTime && diff >= 0 && flightTimestamp <= Date.now();
      } else {
        // For next hours, check if scheduled time is after current time and within the interval
        return diff <= filterTime && diff >= 0 && flightTimestamp >= Date.now();
      }
    });

    this.departureData = [...filteredDepartures];
    this.arrivalData = [...filteredArrivals];
    this.prepareToSentData();
  }

  getTimeFromString(timeString: string): { hours: number, minutes: number } {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(Number);

    let parsedHours = hours;

    if (period === 'PM' && hours !== 12) {
      parsedHours += 12; // Convert PM to 24-hour format
    } else if (period === 'AM' && hours === 12) {
      parsedHours = 0; // Convert 12 AM to 0 hours
    }

    return { hours: parsedHours, minutes };
  }

  getDifferenceInMinutes(time1: { hours: number, minutes: number }, time2: number): number {
    return (time1.hours * 60 + time1.minutes) - time2;
  }

  getFlightTimestamp(scheduledTime: number, currentTimestamp: number): number {
    const date = new Date();
    const hours = Math.floor(scheduledTime / 60);
    const minutes = scheduledTime % 60;
    date.setHours(hours, minutes, 0, 0);
    const flightTimestamp = date.getTime();
    return flightTimestamp;
  }

  resetData() {
    this.resetAllData();
    this.prepareToSentData();
  }

  public onItemSelect(item: any) {
    this.airlineFilters.push(item.item_text);
    this.filterByAirlines();
  }

  public onDeSelect(item: any) {
    const index = this.airlineFilters.indexOf(item.item_text);
    if (index !== -1) {
        this.airlineFilters.splice(index, 1);
    }
    this.filterByAirlines();
  }

  public onSelectAll(items: any) {
    this.airlineFilters = items.map((item: any) => item.item_text);
    console.log(this.airlineFilters);
    this.filterByAirlines();
  }

  public onDeSelectAll(items: any) {
    this.airlineFilters = [];
    this.filterByAirlines();
  }

  filterByAirlines() {
    this.resetAllData();
    if (this.airlineFilters.length == 0) {
      this.prepareToSentData();
      return;
    }
    this.departureData = this.originalDepartureData.filter((data: any) => {
      if (this.airlineFilters.includes(data.airlineName)) {
        return data;
      }
    });
    this.arrivalData = this.originalArrivalData.filter((data: any) => {
      if (this.airlineFilters.includes(data.airlineName)) {
        return data;
      }
    });
    this.prepareToSentData()
  }

  prepareToSentData() {
    this.toSentDepartureData = JSON.parse(JSON.stringify(this.departureData));
    this.toSentlArrivalData = JSON.parse(JSON.stringify(this.arrivalData));
  }

  resetAllData() {
    this.departureData = JSON.parse(JSON.stringify(this.originalDepartureData));
    this.arrivalData = JSON.parse(JSON.stringify(this.originalArrivalData));
  }
}
