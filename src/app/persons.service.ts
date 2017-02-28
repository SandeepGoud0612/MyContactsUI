import { Injectable } from '@angular/core';
import { Person } from './person';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonsService {

  conatctsUrl: string = 'http://localhost:8080/contacts';

  constructor(private http: Http) { }

  getAllPersons(): Promise<Person[]> {    
     return this.http.get(this.conatctsUrl)
               .toPromise()
               .then(response => response.json().data as Person[])
               .catch(this.handleError);     
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
