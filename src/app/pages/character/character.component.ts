import { Component, OnInit, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  template: `  
    @for(character of characters; track character.id){
    <div class="w-1/2 flex items-center justify-center border rounded-md mx-auto my-10">
      <img
        src="{{ character.image }}"
        alt="{{ character.name }}"
        style="width:50% items-center"
      />
      <div class="flex-col justify-center px-10">
        <h4>
          <b>{{ character.name }}</b>
        </h4>
        <p>{{ character.species }}</p>
        <p>{{ character.status }}</p>
      </div>
    </div>
    }
  `,
  styles: `
  :host{
    display: block;
    min-height: 70vh;
  }
  `,
})
export class CharacterComponent implements OnInit {
  characters: any[] = [];

  private characterService = inject(CharacterService);

  ngOnInit() {
    this.getAllCharacter();
  }

  getAllCharacter() {
    this.characterService.getAllCharacter().subscribe({
      next: (data) => {
        this.characters = data;
        console.log(this.characters);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
