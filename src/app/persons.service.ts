import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Person } from './person';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { PersonSearchCriteria } from './person-search-criteria';

@Injectable()
export class PersonsService {

  personsUri: string = 'http://localhost:8080/persons';

   private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getAllPersonsBySearchCriteria(personSearchCriteria: PersonSearchCriteria): Observable<Person[]> {
     return this.http.post(this.personsUri + "/searchcriteria", JSON.stringify(personSearchCriteria), { headers: this.headers })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getAllPersons(): Observable<Person[]> {
    return this.http.get(this.personsUri + "/personaldetails")
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  deletePerson(id: number): Observable<void> {
     return this.http.delete(this.personsUri + "/" + id)
      .map((response: Response) => {return;})
      .catch(this.handleError);
  } 

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
