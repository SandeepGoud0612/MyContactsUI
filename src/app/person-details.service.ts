import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Person } from './person';
import { Http, Response } from '@angular/http';

@Injectable()
export class PersonDetailsService {

  personsUri: string = 'http://localhost:8080/persons';

  constructor(private http: Http) { }

  getPersonById(id: number): Observable<Person> {
    return this.http.get(this.personsUri + "/personaldetails/" + id)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
