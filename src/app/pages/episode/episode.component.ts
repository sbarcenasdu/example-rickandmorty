import { Component } from '@angular/core';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [],
  template: `
    <p>
      episode works!
    </p>
  `,
  styles: `
  :host{
    display: block;
    height: 70vh;
  }
  `
})
export class EpisodeComponent {

}
