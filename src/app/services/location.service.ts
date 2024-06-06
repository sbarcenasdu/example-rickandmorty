import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private http = inject(HttpClient);
  private apiUrl = 'https://rickandmortyapi.com/api/location';

  getAllLocation(): Observable<Location[]> {
    return this.http.get<{ results: Location[] }>(this.apiUrl).pipe(
      map((response) => response.results),
      catchError((error) => {
        throw error;
      })
    );
  }
}
