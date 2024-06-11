import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { AsyncPipe } from '@angular/common';
import { fadeInAnimation, rotateAnimation } from './basic-animations/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    AsyncPipe,
  ],
  template: `
    <app-header />
    <div class="min-h-[70vh]"><router-outlet /></div>
    @if(isLoading$ | async){<app-loader />}
    <app-footer />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rickandmorty';
  private loaderService = inject(LoaderService);
  isLoading$ = this.loaderService.isLoading$;
}
