import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: any[] = [
    {
        firstName: 'Alice',
        lastName: 'Johnson',
        phoneNumber: '+1122334455',
        email: 'alice.johnson@example.com',
        streetAddress: '789 Elm St',
        city: 'Smallville',
        state: 'TX',
        postalCode: '54321',
        licenseNumber: 'L543210987',
        licenseState: 'TX',
        startDate: '2023-03-01',
        endDate: '2024-03-01',
        cardType: 'American Express',
        cardNumber: '************9012',
        expiryDate: '03/24',
        currentRecord: 'R-23125',
        pastRecord: '458'
    },
    {
        firstName: 'Bob',
        lastName: 'Brown',
        phoneNumber: '+1555666777',
        email: 'bob.brown@example.com',
        streetAddress: '101 Pine St',
        city: 'Bigtown',
        state: 'FL',
        postalCode: '67890',
        licenseNumber: 'L678901234',
        licenseState: 'FL',
        startDate: '2023-04-01',
        endDate: '2024-04-01',
        cardType: 'Discover',
        cardNumber: '************3456',
        expiryDate: '04/24',
        currentRecord: 'R-23126',
        pastRecord: '459'
    },
    {
        firstName: 'Emily',
        lastName: 'Davis',
        phoneNumber: '+1444333222',
        email: 'emily.davis@example.com',
        streetAddress: '222 Maple St',
        city: 'Midtown',
        state: 'IL',
        postalCode: '13579',
        licenseNumber: 'L135791357',
        licenseState: 'IL',
        startDate: '2023-05-01',
        endDate: '2024-05-01',
        cardType: 'Visa',
        cardNumber: '************6789',
        expiryDate: '05/24',
        currentRecord: 'R-23127',
        pastRecord: '460'
    },
    {
        firstName: 'David',
        lastName: 'Martinez',
        phoneNumber: '+1666777888',
        email: 'david.martinez@example.com',
        streetAddress: '333 Oak St',
        city: 'Downtown',
        state: 'CA',
        postalCode: '24680',
        licenseNumber: 'L246801357',
        licenseState: 'CA',
        startDate: '2023-06-01',
        endDate: '2024-06-01',
        cardType: 'MasterCard',
        cardNumber: '************2345',
        expiryDate: '06/24',
        currentRecord: 'R-23128',
        pastRecord: '461'
    },
    {
        firstName: 'Grace',
        lastName: 'Wilson',
        phoneNumber: '+1888777666',
        email: 'grace.wilson@example.com',
        streetAddress: '444 Pine St',
        city: 'Uptown',
        state: 'NY',
        postalCode: '97531',
        licenseNumber: 'L975310246',
        licenseState: 'NY',
        startDate: '2023-07-01',
        endDate: '2024-07-01',
        cardType: 'American Express',
        cardNumber: '************7890',
        expiryDate: '07/24',
        currentRecord: 'R-23129',
        pastRecord: '462'
    },
    {
        firstName: 'James',
        lastName: 'Taylor',
        phoneNumber: '+1999888777',
        email: 'james.taylor@example.com',
        streetAddress: '555 Elm St',
        city: 'Downton',
        state: 'CA',
        postalCode: '36912',
        licenseNumber: 'L369124975',
        licenseState: 'CA',
        startDate: '2023-08-01',
        endDate: '2024-08-01',
        cardType: 'Discover',
        cardNumber: '************8901',
        expiryDate: '08/24',
        currentRecord: 'R-23130',
        pastRecord: '463'
    },
    {
        firstName: 'Olivia',
        lastName: 'Anderson',
        phoneNumber: '+1333222111',
        email: 'olivia.anderson@example.com',
        streetAddress: '666 Maple St',
        city: 'Uptown',
        state: 'TX',
        postalCode: '75369',
        licenseNumber: 'L753698741',
        licenseState: 'TX',
        startDate: '2023-09-01',
        endDate: '2024-09-01',
        cardType: 'Visa',
        cardNumber: '************1234',
        expiryDate: '09/24',
        currentRecord: 'R-23131',
        pastRecord: '464'
    },
    {
        firstName: 'Sophia',
        lastName: 'Garcia',
        phoneNumber: '+1888333222',
        email: 'sophia.garcia@example.com',
        streetAddress: '777 Oak St',
        city: 'Midtown',
        state: 'FL',
        postalCode: '85213',
        licenseNumber: 'L852139753',
        licenseState: 'FL',
        startDate: '2023-10-01',
        endDate: '2024-10-01',
        cardType: 'MasterCard',
        cardNumber: '************4567',
        expiryDate: '10/24',
        currentRecord: 'R-23132',
        pastRecord: '465'
    },
    {
        firstName: 'Michael',
        lastName: 'Rodriguez',
        phoneNumber: '+1222111444',
        email: 'michael.rodriguez@example.com',
        streetAddress: '888 Elm St',
        city: 'Uptown',
        state: 'IL',
        postalCode: '96385',
        licenseNumber: 'L963852741',
        licenseState: 'IL',
        startDate: '2023-11-01',
        endDate: '2024-11-01',
        cardType: 'American Express',
        cardNumber: '************5678',
        expiryDate: '11/24',
        currentRecord: 'R-23133',
        pastRecord: '466'
    },
    {
        firstName: 'Emma',
        lastName: 'Lopez',
        phoneNumber: '+1666555444',
        email: 'emma.lopez@example.com',
        streetAddress: '999 Maple St',
        city: 'Downton',
        state: 'NY',
        postalCode: '74185',
        licenseNumber: 'L741852963',
        licenseState: 'NY',
        startDate: '2023-12-01',
        endDate: '2024-12-01',
        cardType: 'Discover',
        cardNumber: '************7890',
        expiryDate: '12/24',
        currentRecord: 'R-23134',
        pastRecord: '467'
    }
];
  selectedCustomerData$ = new BehaviorSubject<any>(null);  
  constructor() { }

  getCustomers(): Observable<any[]> {
    return of(this.customers);
  }

  addCustomer(customer: any): Observable<any> {
    this.customers.push(customer);
    return of(customer);
  }
}
