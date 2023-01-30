import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

import { FakeLaunchesService } from 'src/app/shared/services/fake-launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit, AfterViewInit {
  searchInput = new FormControl();
  launches = [];
  searchedLaunches = [];
  cachedData = [];
  defaultImage = '../../../assets/images/default-rocket.png';
  limit = 20;
  searchedFlight = false;
  offset = 0;
  totalElements: number;
  constructor(private launchesService: FakeLaunchesService) {}

  ngOnInit(): void {
    this.listLaunches(this.limit, this.offset);
    this.searchLaunches();
  }
  ngAfterViewInit() {}

  isIntersecting(event: any) {
    if (event && this.offset <= this.totalElements) {
      this.offset += 20;
      if (this.offset > this.totalElements) {
        return;
      }
      this.listLaunches(this.limit, this.offset);
    }
  }
  listLaunches(limit: number, offset: number) {
    this.launchesService
      .getLaunchesData(limit, offset)
      .subscribe((data: any) => {
        console.log(data);
        this.totalElements = Number(data.headers.get('spacex-api-count'));

        if (!this.searchedFlight) {
          this.launches = this.launches.concat(data.body);
          this.cachedData = this.launches;
        }
      });
  }
  searchLaunches() {
    this.searchInput.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((searchedNum) => {
        if(searchedNum !== '')
        this.searchedFlight = true;
        this.launchesService
          .searchLaunchesData(searchedNum)
          .subscribe((data: any) => {
            this.launches = data;
          });
      });
  }
}
