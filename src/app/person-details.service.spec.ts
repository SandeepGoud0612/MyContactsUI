/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonDetailsService } from './person-details.service';

describe('PersonDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonDetailsService]
    });
  });

  it('should ...', inject([PersonDetailsService], (service: PersonDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
