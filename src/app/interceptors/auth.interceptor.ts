import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  console.log('Entra a authInterceptor');
  const authService = inject(AuthService);

  const isAuthenticated = authService.checkAuthentication();
  let authReq = req;
  if (isAuthenticated) {
    const authToken = 'your-auth-token';
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` },
    });
  }
  console.log('Petición con headers de autenticación:', authReq);

  return next(authReq).pipe(
    tap({
      next: (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Respuesta recibida:', event);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
      }
    })
  );
};
