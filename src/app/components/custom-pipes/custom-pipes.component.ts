import { Component } from '@angular/core';
import { GreetPipe } from '../../custom-pipes/greet.pipe';
import { CustomCurrencyPipe } from '../../custom-pipes/custom-currency.pipe';
import { TruncatePipe } from '../../custom-pipes/truncate.pipe';

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [GreetPipe, CustomCurrencyPipe, TruncatePipe],
  template: `
    <p>custom-pipes works!</p>

    <div>
      <p>{{ name }}</p>
      <p>{{ name | greet }}</p>
    </div>
    <div>
      <p>{{ cost }}</p>
      <p>{{ cost | customCurrency : '¥' }}</p>
    </div>
    <div>
      <p>{{ paragraph }}</p>
      <br />
      <p>{{ paragraph | truncate : 10: true }}</p>
    </div>
  `,
  styles: `
  :host{
    display: block;
    min-height: 70vh;
    font-size : 1.4rem;
  }

  div{
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid;
  }
  `,
})
export class CustomPipesComponent {
  name = 'Carlos Mendoza';
  cost = 320.666;
  paragraph =
    'Párrafo para ser truncado en xx caracteres. Si el segundo parámetro es "true", no quedarán palabras incompletas.';
}
