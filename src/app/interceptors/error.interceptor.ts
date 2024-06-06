import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Entra a errorInterceptor');

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log('Error detectado en errorInterceptor');
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Error Code: ${error.status} \nMessage: ${error.message}`;
      }
      alert(errorMessage);
      throw error;
    })
  );
};
