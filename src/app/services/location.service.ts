import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private http = inject(HttpClient);
  private apiUrl = 'https://rickandmortyapi.com/api/location';

  getAllLocation(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(
        map((res: any) => {
          return res.results;
        }),
        catchError((error: any) => {
          return error;
        })
      );
  }
}
