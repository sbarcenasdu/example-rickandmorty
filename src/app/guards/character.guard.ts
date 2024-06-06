import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const characterGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  console.log('Guard is checking authentication');

  if (authService.checkAuthentication()) {
    return true;
  } else {
    // Aquí podrías redirigir al usuario a la página de inicio de sesión
    console.log('Access denied - Redirecting to login');
    router.navigate(['/']);
    return false;
  }
};
