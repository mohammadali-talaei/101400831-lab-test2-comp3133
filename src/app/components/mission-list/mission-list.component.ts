import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/space-x.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.scss']
})
export class MissionListComponent implements OnInit {
  launches: any[] = [];
  filteredLaunches: any[] = [];
  searchTerm: string = '';
  selectedYear: string = '';
  availableYears: string[] = [];

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.fetchLaunches();
  }

  fetchLaunches(): void {
    this.spaceXService.getAllLaunches().subscribe((data) => {
      this.launches = data;
      this.filteredLaunches = [...this.launches];
      this.populateAvailableYears(); 
    });
  }


  filterLaunches(): void {
    let tempLaunches = this.launches;

    if (this.searchTerm) {
      tempLaunches = tempLaunches.filter((launch) => {
        if (launch?.mission_name?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          launch?.rocket?.rocket_name?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          launch?.rocket?.rocket_type?.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
          launch?.details?.toLowerCase().includes(this.searchTerm.toLowerCase())) {
          return true;
        }
        return false;
      });
      console.log(tempLaunches);
    }

    if (this.selectedYear) {
      tempLaunches = tempLaunches.filter(launch => launch.launch_year === this.selectedYear);
    }

    this.filteredLaunches = tempLaunches;
  }

  populateAvailableYears(): void {
    this.availableYears = [...new Set(this.launches.map(launch => launch.launch_year))];
  }
}
