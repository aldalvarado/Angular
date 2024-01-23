import { Component } from '@angular/core';
import { Personaje } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})

export class MainPageComponent {
  public Characters: Personaje[] = [{
    name: "Krillin",
    power: 1000,
  },{
    name: "Goku",
    power: 9500
  }];
}
