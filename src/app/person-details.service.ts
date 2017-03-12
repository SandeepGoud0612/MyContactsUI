import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';
import { Http, Response, Headers } from '@angular/http';


@Injectable()
export class PersonDetailsService {

  personsUri: string = 'http://localhost:8080/persons';

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getPersonById(id: number): Observable<Person> {
    return this.http.get(this.personsUri + "/" + id)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  updatePerson(id: number, selectedPerson: Person): Observable<Person> {   
    return this.http.put(this.personsUri + "/" + id, JSON.stringify(selectedPerson), { headers: this.headers })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  createPerson(selectedPerson: Person): Observable<Person> {
    return this.http.post(this.personsUri, JSON.stringify(selectedPerson), { headers: this.headers })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
