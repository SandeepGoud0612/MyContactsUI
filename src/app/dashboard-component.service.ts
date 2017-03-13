import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Occasion } from './occasion';
import { Observable } from 'rxjs/Observable';
import { CommonService } from './common.service';

@Injectable()
export class DashboardComponentService { 

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private commonService: CommonService) { }

  getAllOccasionsByCurrentDate(): Observable<string[]> {
    return this.http.get(this.commonService.occasionsUri + "/occasionByCurrentDate", { headers: this.headers })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
