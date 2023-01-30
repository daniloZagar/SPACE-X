import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeLaunchesService {
  config: any;
  constructor(private http: HttpClient) {}
  getLaunchesData(limit: number, offset: number) {
    return this.http.get(`launches?limit=${limit}&offset=${offset}`, {
      observe: 'response',
    });
  }
  searchLaunchesData(flight_number: string) {
    console.log('number', flight_number);
    return this.http.get(`launches?flight_number=${flight_number}`);
  }
}
