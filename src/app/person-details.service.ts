import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';
import { Http, Response, Headers } from '@angular/http';
import { CommonService } from './common.service';

@Injectable()
export class PersonDetailsService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private commonService: CommonService) { }

  getPersonById(id: number): Observable<Person> {
    return this.http.get(this.commonService.personsUri + "/" + id)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  updatePerson(id: number, selectedPerson: Person): Observable<Person> {
    return this.http.put(this.commonService.personsUri + "/" + id, JSON.stringify(selectedPerson), { headers: this.headers })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  createPerson(selectedPerson: Person): Observable<Person> {
    return this.http.post(this.commonService.personsUri, JSON.stringify(selectedPerson), { headers: this.headers })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
