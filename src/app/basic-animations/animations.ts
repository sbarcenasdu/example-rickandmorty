import {
  animate,
  animateChild,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInAnimation = trigger('fade-in', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate('0.5s ease-in-out')]),
]);

export const bounceAnimation = trigger('bounce', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('1.5s ease-out', style({ transform: 'translateY(0)' })),
    animate('1.3s ease-in-out', style({ transform: 'translateY(-50%)' })),
    animate('1.3s ease-in-out', style({ transform: 'translateY(0)' })),
  ]),
]);

export const rotateAnimation = trigger('rotate', [
  transition(':enter', [
    style({ transform: 'rotate(0deg)' }),
    animate('1s ease-in-out', style({ transform: 'rotate(360deg)' })),
  ]),
  transition(':leave', [
    animate('1s ease-in-out', style({ transform: 'rotate(0deg)' })),
  ]),
]);

export const zoomInAnimation = trigger('zoomIn', [
  state('void', style({ transform: 'scale(0)' })),
  transition(':enter', [
    animate('0.5s ease-in-out', style({ transform: 'scale(1)' })),
  ]),
  transition(':leave', [
    animate('0.5s ease-in-out', style({ transform: 'scale(0)' })),
  ]),
]);

export const zoomOutAnimation = trigger('zoomOut', [
  state('void', style({ transform: 'scale(1)' })),
  transition(':enter', [
    animate('0.5s ease-in-out', style({ transform: 'scale(0.6)' })),
  ]),
  transition(':leave', [
    animate('0.5s ease-in-out', style({ transform: 'scale(1.1)' })),
  ]),
]);

//ANIMACIONES DE ESTADO

export const colorChangeAnimation = trigger('colorChange', [
  state('red', style({ backgroundColor: 'red' })),
  state('blue', style({ backgroundColor: 'blue' })),
  transition('red <=> blue', [animate('0.5s')]),
]);

export const hoverAnimation = trigger('hover', [
  state('hover', style({ transform: 'scale(1.3)' })),
  state('normal', style({ transform: 'scale(1)' })),
  transition('normal => hover', [animate('200ms ease-in')]),
  transition('hover => normal', [animate('200ms ease-out')]),
]);

//ANIMACIONES DE LISTA

export const listItemAnimation = trigger('listItem', [
  transition('* => *', [
    // Cada vez que cambia la lista
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        stagger(0.3, [
          animate(
            '600ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ]),
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        stagger(3.3, [
          animate(
            '600ms ease-in',
            style({ opacity: 0, transform: 'translateY(-20px)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

//bad animation
export const badAnimation = trigger('bad', [
  state(
    'inactive',
    style({
      transform: 'translateX(0)',
    })
  ),
  state(
    'active',
    style({
      transform: 'translateX(100px)',
    })
  ),
  transition('inactive => active', [animate('1s')]),
  transition('active => inactive', [animate('1s')]),
]);

//optimizacion de animaciones
export const optimizedAnimation = trigger('optimized', [
  state(
    'inactive',
    style({
      transform: 'translateX(0)',
    })
  ),
  state(
    'active',
    style({
      transform: 'translateX(100px)',
    })
  ),
  transition('inactive => active', [animate('1s')]),
  transition('active => inactive', [animate('1s')]),
  transition('* => *', animateChild()),
]);
