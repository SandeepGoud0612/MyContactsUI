import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  persons: Person[] = [
    {id: 1, firstName: 'First Name', lastName: 'Last Name', emailId: 'Email Id', phoneNumber: 12345, dob: new Date("February 26, 2017")  },
    {id: 2, firstName: 'First Name', lastName: 'Last Name', emailId: 'Email Id', phoneNumber: 12345, dob: new Date("February 26, 2017")  },
    {id: 3, firstName: 'First Name', lastName: 'Last Name', emailId: 'Email Id', phoneNumber: 12345, dob: new Date("February 26, 2017")  },
    {id: 4, firstName: 'First Name', lastName: 'Last Name', emailId: 'Email Id', phoneNumber: 12345, dob: new Date("February 26, 2017")  },
    {id: 5, firstName: 'First Name', lastName: 'Last Name', emailId: 'Email Id', phoneNumber: 12345, dob: new Date("February 26, 2017")  }
    ];

  constructor() { }

  ngOnInit() {
  }

}
