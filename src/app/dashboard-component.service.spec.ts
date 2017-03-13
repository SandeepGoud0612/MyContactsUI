/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardComponentService } from './dashboard-component.service';

describe('DashboardComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardComponentService]
    });
  });

  it('should ...', inject([DashboardComponentService], (service: DashboardComponentService) => {
    expect(service).toBeTruthy();
  }));
});
