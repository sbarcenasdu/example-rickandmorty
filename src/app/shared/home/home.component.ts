import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <p>
      home works!
    </p>
    <br>
    <button (click)=login()>Login</button>
    <br>
    <button (click)=logout()>Logout</button>
    <br>
    <button (click)="goToAbout()" type="button" class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Ir a About</button>

  `,
  styles: `
  :host{
    display: block;
    height: 70vh;
  }
  `
})
export class HomeComponent {

  private authService = inject(AuthService);
  private router = inject(Router)

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }
}
