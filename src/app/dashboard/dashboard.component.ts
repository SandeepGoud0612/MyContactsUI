import { Component, OnInit } from '@angular/core';
import { DashboardComponentService } from '../dashboard-component.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit 
{

  occasions: string[] = [];
 
  constructor(private dashboardComponentService: DashboardComponentService) { }

  ngOnInit() {
    this.getAllOccasionsByCurrentDate();
  }

  getAllOccasionsByCurrentDate(): void 
  {
    this.dashboardComponentService.getAllOccasionsByCurrentDate().subscribe(occasions => this.occasions = occasions);
  }
  
}