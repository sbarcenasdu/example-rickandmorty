import { Component } from '@angular/core';
import {
  badAnimation,
  bounceAnimation,
  colorChangeAnimation,
  fadeInAnimation,
  hoverAnimation,
  listItemAnimation,
  optimizedAnimation,
  rotateAnimation,
  zoomInAnimation,
  zoomOutAnimation,
} from '../../basic-animations/animations';

@Component({
  selector: 'app-basic-animations',
  standalone: true,
  imports: [],
  template: `
    <p>basic-animations works!</p>
    <div class="animated-box" [@fade-in]></div>
    <div class="animated-box" [@bounce]></div>
    <div class="animated-box" [@rotate]></div>
    <div class="animated-box" [@zoomIn]></div>
    <div class="animated-box" [@zoomOut]></div>
    <br />
    <p>Animaciones de Estado</p>
    <div class="animated-box" [@colorChange]="state" (click)="toggleColor()"></div>
    <div class="animated-box" [@hover]="stateHover"
    (mouseenter)="toggleHover()"
    (mouseleave)="toggleHover()"
     ></div>

    <br />
    <p>Animaciones de Lista</p>

    <ul [@listItem]="items.length">
      @for (item of items; track $index) {
        <div class="animated-box text-black text-center"> {{item}}</div>
  
      }
    </ul>
    <button class="p-2 m-2 rounded bg-gray-500" (click)="addItem()">Add Item</button>
    <button class="p-2 m-2 rounded bg-gray-500" (click)="removeItem()">Remove Item</button>

    <br>
    <p>Optimización</p>
    <div class="animated-box cursor-pointer" [@bad]="badState" (click)="toggleBad()" ></div>
    <div class="animated-box cursor-pointer" [@optimized]="optimizedState" (click)="toggleOptimized()" ></div>
    <div class="animated-box fade-in"></div>
    <div class="animated-box slide-in-left"></div>
    <div class="animated-box slide-in-right"></div>
    <div class="animated-box bounce"></div>
    <div class="animated-box rotate"></div>
    <div class="animated-box spin"></div>
    <div class="animated-box blink"></div>
    <div class="animated-box swing"></div>
    <div class="animated-box fade-scale"></div>
    <br />
    <div class="container">
      <div class="box"></div>
    </div>


  `,
  styleUrl: './basic-animations.component.css',

  animations: [
    fadeInAnimation,
    bounceAnimation,
    rotateAnimation,
    zoomInAnimation,
    zoomOutAnimation,
    colorChangeAnimation,
    hoverAnimation,
    listItemAnimation,
    badAnimation,
    optimizedAnimation
  ],
})
export class BasicAnimationsComponent {
  state = 'red';
  toggleColor() {
    this.state = this.state === 'red' ? 'blue' : 'red';
  }

  stateHover = 'normal';
  toggleHover() {
    this.stateHover = this.stateHover === 'normal' ? 'hover' : 'normal';
  }

  items = ['item1', 'item2', 'item3'];
  addItem() {
    this.items.push(`item${this.items.length + 1}`);
  }
  removeItem() {
    this.items.pop();
  }

  badState = 'inactive';
  toggleBad() {
    this.badState = this.badState === 'inactive' ? 'active' : 'inactive';
  }

  optimizedState = 'inactive';
  toggleOptimized() {
    this.optimizedState = this.optimizedState === 'inactive' ? 'active' : 'inactive';
  }
}
