import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    JsonPipe,
    PercentPipe,
    DecimalPipe,
    SlicePipe
  ],
  template: `
    <p>pipes works!</p>
    <div>
      <p>{{ currentDate }}</p>
      <p>{{ currentDate | date : 'fullDate' }}</p>
      <p>{{ currentDate | date : 'yyyy' }}</p>
      <p>Formatted Date: {{ currentDate | date : 'hh:mm' : 'UTC' }}</p>
      <p>Formatted Date: {{ currentDate | date : 'hh:mm' : 'local' }}</p>
      <p>Formatted Date: {{ currentDate | date : 'hh:mm' : '-0400' }}</p>
    </div>

    <div>
      <p>Price: {{ price }}</p>
      <p>Price: {{ price | currency : 'EUR' }}</p>
    </div>

    <div>
      <p>{{ name }}</p>
      <p>{{ name | uppercase }}</p>
      <p>{{ name | lowercase }}</p>
      <p>{{ name | titlecase }}</p>
    </div>

    <div>
      <p>JSON Data: {{ data.key2 }}</p>
      <p>{{ data | json }}</p>
    </div>
    <div>
      <p>{{ discount }}</p>
      <p>{{ discount | percent }}</p>
    </div>
    <div>
      <p>{{ pi }}</p>
      <p>{{ pi | number : '1.2-5' }}</p>
    </div>
    <div>
      <p>{{ items }}</p>
      <p>{{ items | slice : 1 : 3 }}</p>
      <p>{{ items }}</p>
    </div>
  `,
  styles: `
  :host{
    display:block;
    min-height: 70vh;
    font-size: 1.4rem;
  }

  div{
    margin: 15px;
    padding: 10px;
    border: 1px solid;
  }
  `,
})
export class PipesComponent {
  currentDate = new Date();
  price = 200.5546;
  name = 'pedro alonso';
  data = {
    key: 'value',
    key2: 'value2',
    key3: 'value3',
  };
  discount = 0.25;

  pi = Math.PI;

  items = ['item1', 'item2', 'item3', 'item4', 'item5'];
}
