import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})

export class DbzListComponent {
  @import()
  public CharacterList: Personaje[] =[{
    name: "Trunks",
    power: 10
  }]
}
