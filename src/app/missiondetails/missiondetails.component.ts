import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../services/space-x.service';

@Component({
  selector: 'app-mission-details', // Add selector for the component
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissionDetailsComponent implements OnInit {
  missionDetails: any;

  constructor(private route: ActivatedRoute, private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const flightNumber = params.get('id') ?? '';
      this.fetchMissionDetails(flightNumber);
    });
  }

  fetchMissionDetails(flightNumber: string): void {
    this.spaceXService.getLaunchDetails(flightNumber)
      .subscribe((data) => {
        this.missionDetails = data;
      });
  }
}
