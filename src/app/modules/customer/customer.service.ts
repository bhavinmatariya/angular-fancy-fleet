import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    private customers: any = [
        {
            id: 1,
            customerDetails: {
                firstName: 'Alice',
                lastName: 'Johnson',
                phoneNumber: '+1122334455',
                email: 'alice.johnson@example.com',
            },
            addressDetails: {
                street: 'Street 1',
                street2: 'Street 2',
                city: 'Smallville',
                state: 'California',
                zip: 123456,
                country: 'United States',
            },
            licenseDetails: {
                licenseNumber: 'L543210987',
                state: 'TX',
                endDate: '2024-03-01',
            },
            currentReservation: 'R-23125',
            pastReservation: '458',
            savedCreditCard: {
                cardNumber: '************9012',
                expiryDate: '2027-07',
                cardType: 'American Express',
            }
        },
        {
            id: 2,
            customerDetails: {
                firstName: 'John',
                lastName: 'Doe',
                phoneNumber: '+1122334455',
                email: 'alice.johnson@example.com',
            },
            addressDetails: {
                street: 'Street 1',
                street2: 'Street 2',
                city: 'Houston',
                state: 'New York',
                zip: 123456,
                country: 'United States',
            },
            licenseDetails: {
                licenseNumber: 'L543210987',
                state: 'TX',
                endDate: '2024-03-01',
            },
            currentReservation: 'R-23125',
            pastReservation: '458',
            savedCreditCard: {
                cardNumber: '************9012',
                expiryDate: '2025-05',
                cardType: 'American Express',
            }
        },
        {
            id: 3,
            customerDetails: {
                firstName: 'Michael',
                lastName: 'Smith',
                phoneNumber: '+1122334455',
                email: 'alice.johnson@example.com',
            },
            addressDetails: {
                street: 'Street 1',
                street2: 'Street 2',
                city: 'Smallville',
                state: 'Texas',
                zip: 123456,
                country: 'United States',
            },
            licenseDetails: {
                licenseNumber: 'L543210987',
                state: 'TX',
                endDate: '2024-03-01',
            },
            currentReservation: 'R-23125',
            pastReservation: '458',
            savedCreditCard: {
                cardNumber: '************9012',
                expiryDate: '2025-02',
                cardType: 'American Express',
            }
        },
        {
            id: 4,
            customerDetails: {
                firstName: 'David',
                lastName: 'Brown',
                phoneNumber: '+1122334455',
                email: 'alice.johnson@example.com',
            },
            addressDetails: {
                street: 'Street 1',
                street2: 'Street 2',
                city: 'Smallville',
                state: 'Texas',
                zip: 123456,
                country: 'United States',
            },
            licenseDetails: {
                licenseNumber: 'L543210987',
                state: 'TX',
                endDate: '2024-03-01',
            },
            currentReservation: 'R-23125',
            pastReservation: '458',
            savedCreditCard: {
                cardNumber: '************9012',
                expiryDate: '2027-07',
                cardType: 'American Express',
            }
        },
        {
            id: 5,
            customerDetails: {
                firstName: 'William',
                lastName: 'Jones',
                phoneNumber: '+1122334455',
                email: 'alice.johnson@example.com',
            },
            addressDetails: {
                street: 'Street 1',
                street2: 'Street 2',
                city: 'Dallas',
                state: 'Pennsylvania',
                zip: 123456,
                country: 'United States',
            },
            licenseDetails: {
                licenseNumber: 'L543210987',
                state: 'TX',
                endDate: '2024-03-01',
            },
            currentReservation: 'R-23125',
            pastReservation: '458',
            savedCreditCard: {
                cardNumber: '************9012',
                expiryDate: '2027-07',
                cardType: 'American Express',
            }
        },
        {
            id: 6,
            customerDetails: {
                firstName: 'Robert',
                lastName: 'Taylor',
                phoneNumber: '+1122334455',
                email: 'alice.johnson@example.com',
            },
            addressDetails: {
                street: 'Street 1',
                street2: 'Street 2',
                city: 'Chicago',
                state: 'Ohio',
                zip: 123456,
                country: 'United States',
            },
            licenseDetails: {
                licenseNumber: 'L543210987',
                state: 'TX',
                endDate: '2024-03-01',
            },
            currentReservation: 'R-23125',
            pastReservation: '458',
            savedCreditCard: {
                cardNumber: '************9012',
                expiryDate: '2027-07',
                cardType: 'American Express',
            }
        },
        {
            id: 7,
            customerDetails: {
                firstName: 'James',
                lastName: 'Wilson',
                phoneNumber: '+1122334455',
                email: 'alice.johnson@example.com',
            },
            addressDetails: {
                street: 'Street 1',
                street2: 'Street 2',
                city: 'Los Angeles',
                state: 'Illinois',
                zip: 123456,
                country: 'United States',
            },
            licenseDetails: {
                licenseNumber: 'L543210987',
                state: 'TX',
                endDate: '2024-03-01',
            },
            currentReservation: 'R-23125',
            pastReservation: '458',
            savedCreditCard: {
                cardNumber: '************9012',
                expiryDate: '2025-09',
                cardType: 'American Express',
            }
        },
        {
            id: 8,
            customerDetails: {
                firstName: 'Charles',
                lastName: 'Anderson',
                phoneNumber: '+1122334455',
                email: 'alice.johnson@example.com',
            },
            addressDetails: {
                street: 'Street 1',
                street2: 'Street 2',
                city: 'Smallville',
                state: 'Texas',
                zip: 123456,
                country: 'United States',
            },
            licenseDetails: {
                licenseNumber: 'L543210987',
                state: 'TX',
                endDate: '2024-03-01',
            },
            currentReservation: 'R-23125',
            pastReservation: '458',
            savedCreditCard: {
                cardNumber: '************9012',
                expiryDate: '2024-05',
                cardType: 'American Express',
            }
        },
        {
            id: 9,
            customerDetails: {
                firstName: 'Joseph',
                lastName: 'Martinez',
                phoneNumber: '+1122334455',
                email: 'alice.johnson@example.com',
            },
            addressDetails: {
                street: 'Street 1',
                street2: 'Street 2',
                city: 'Phoenix',
                state: 'North Carolina',
                zip: 123456,
                country: 'United States',
            },
            licenseDetails: {
                licenseNumber: 'L543210987',
                state: 'TX',
                endDate: '2024-03-01',
            },
            currentReservation: 'R-23125',
            pastReservation: '458',
            savedCreditCard: {
                cardNumber: '************9012',
                expiryDate: '2025-07',
                cardType: 'American Express',
            }
        },
        {
            id: 10,
            customerDetails: {
                firstName: 'Daniel',
                lastName: 'Thomas',
                phoneNumber: '+1122334455',
                email: 'alice.johnson@example.com',
            },
            addressDetails: {
                street: 'Street 1',
                street2: 'Street 2',
                city: 'Smallville',
                state: 'Texas',
                zip: 123456,
                country: 'United States',
            },
            licenseDetails: {
                licenseNumber: 'L543210987',
                state: 'TX',
                endDate: '2024-03-01',
            },
            currentReservation: 'R-23125',
            pastReservation: '458',
            savedCreditCard: {
                cardNumber: '************9012',
                expiryDate: '2027-07',
                cardType: 'American Express',
            }
        },
    ];

    customerReservations: any = {
        currentreservations: [
            {
                recordNo: 'R-387234',
                pickUpDate: '12-23-2023',
                dropOffDate: '12-27-2023',
            }
        ],
        pastReservations: [
            {
                recordNo: 'R-387234',
                pickUpDate: '12-23-2023',
                dropOffDate: '12-27-2023',
            },
            {
                recordNo: 'R-387356',
                pickUpDate: '09-22-2023',
                dropOffDate: '09-26-2023',
            },
            {
                recordNo: 'R-397644',
                pickUpDate: '07-21-2023',
                dropOffDate: '07-25-2023',
            },
        ],
    };
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
