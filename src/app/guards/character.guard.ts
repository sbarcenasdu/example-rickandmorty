import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';

export const characterGuard: CanActivateFn = (route, state) => {
  const loaderService = inject(LoaderService);
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log('Guard is checking authentication');

  if (authService.checkAuthentication()) {
    loaderService.hide();
    return true;
  } else {
    // Aquí podrías redirigir al usuario a la página de inicio de sesión
    console.log('Acceso denegado. Redirigiendo al inicio de sesión.');
    // alert('Debes iniciar sesión para acceder a esta página.');
    router.navigate(['/']);
    loaderService.hide();
    return false;
  }
};
