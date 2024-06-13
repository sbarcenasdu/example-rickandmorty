import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Character } from '../models/character';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private http = inject(HttpClient);
  // private apiUrl = 'https://rickandmortyapi.com/api/character';
  private apiUrl = environment.apiBaseUrl + environment.endpoints.characters;
  getAllCharacter(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((res: any) => {
        return res.results;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`).pipe(
      map((response) => response),
      catchError((error) => {
        throw error;
      })
    );
  }
}
