import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  public OnDelete: EventEmitter<number> = new EventEmitter();

  DeleteCharacter(index:number):void{
    this.OnDelete.emit(index);
  }
}
