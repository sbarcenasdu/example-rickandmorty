import { Routes } from '@angular/router';
import { characterGuard } from './guards/character.guard';
import { CharacterComponent } from './pages/character/character.component';
import { HomeComponent } from './shared/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NestedFormComponent } from './components/nested-form/nested-form.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { locationResolver } from './resolvers/location.resolver';
import { BasicAnimationsComponent } from './shared/basic-animations/basic-animations.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
  {
    path: 'location',
    component: LocationComponent,
    canActivate: [characterGuard],
    resolve: { locations: locationResolver },
  },
  { path: 'episode', component: EpisodeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user', component: UserFormComponent },
  { path: 'nested', component: NestedFormComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'custom-pipes', component: CustomPipesComponent },
  { path: 'basic', component: BasicAnimationsComponent },



  { path: '**', redirectTo: '', pathMatch: 'full' },
];
