import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})

export class DbzListComponent {
  @Input()
  public CharacterList: Character[] =[{
    name: "Trunks",
    power: 10
  }]
}
