import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Location } from '../models/location';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';

export const locationResolver: ResolveFn<Location[]> = (route, state) => {
  const locationService = inject(LocationService);
  const router = inject(Router);
  const loaderService = inject(LoaderService);

  // loaderService.show();
  return locationService.getAllLocation().pipe(
    catchError((error) => {
      console.error('Error fetching locations:', error);
      alert('Hubo un error al cargar las ubicaciones. Por favor, inténtalo de nuevo más tarde.');
      router.navigate(['/']);
      return of([]);
    })
  );
};
