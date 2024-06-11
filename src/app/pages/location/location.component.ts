import { Component, inject } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Location } from '../../models/location';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  template: `
    <table class="w-10/12 mx-auto my-10">
      <thead>
        <tr>
          @for(key of locationsKeys; track $index){
          <th>{{ key }}</th>
          }
        </tr>
      </thead>
      <tbody>
        @for(location of locations; track location.id){
        <tr>
          <td>{{ location.id }}</td>
          <td>{{ location.name }}</td>
          <td>{{ location.type }}</td>
          <td>{{ location.dimension }}</td>

          <!-- <td>
            <ul>
              @for(resident of location.residents.slice(0,3); track $index){
              <li>{{ resident }}</li>
              }
            </ul>
          </td> -->
          <td>
            @if(location.showAllResidents){
            <ul>
              @for(resident of location.residents; track $index){
              <li>{{ resident }}</li>
              } @if(location.residents.length > 3){
              <button (click)="toggleResidentsView(location)">Ocultar</button>
              }
            </ul>
            }@else {
            <ul>
              @for(resident of location.residents.slice(0,3); track $index){
              <li>{{ resident }}</li>
              } @if(location.residents.length > 3){
              <button (click)="toggleResidentsView(location)">
                Mostrar {{ location.residents.length - 3 }} más...
              </button>
              }
            </ul>
            }
          </td>

          <td>{{ location.url }}</td>
          <td>{{ location.created }}</td>
        </tr>
        }
      </tbody>
    </table>
  `,
  styles: `
  :host{
    display: block;
    // min-height: 70vh;
  }
  button{
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
  }
  
  td, th{
    border: 1px solid;
    padding: 10px;
  }
  `,
})
export class LocationComponent {
  private route = inject(ActivatedRoute);
  private loaderService = inject(LoaderService);

  locations: (Location & { showAllResidents: boolean })[] = [];
  locationsKeys: string[] = [];

  ngOnInit() {
    this.getAllLocation();
  }

  getAllLocation() {
    this.route.data.subscribe({
      next: (data) => {
        setTimeout(() =>{const locations = data['locations'] as Location[];
        this.locationsKeys = locations.length > 0 ? Object.keys(locations[0]) : [];
        this.locations = locations.map((location: any) => ({
          ...location,
          showAllResidents: false,
        }));}, 2000);
      },
      error: (error) => {
        console.error(error);
        alert(
          'Hubo un error al cargar las ubicaciones. Por favor, inténtalo de nuevo más tarde.'
        );
      },
    });
    // this.loaderService.hide();
  }

  toggleResidentsView(location: Location & { showAllResidents: boolean }) {
    location.showAllResidents = !location.showAllResidents;
  }
}
