import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})

export class MainPageComponent {
  constructor(private DbzService: DBZService) {}
  get Characters(): Character[] {
    return [...this.DbzService.Characters]
  }

  OnDeleteCharacter(id: string): void {
    this.DbzService.DeleteCharacterByID(id)
  }

  OnNewCharacter(Characters: Character): void {
    this.DbzService.AddCharacter(Characters);
  }
}
