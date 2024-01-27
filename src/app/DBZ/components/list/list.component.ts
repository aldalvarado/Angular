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
    id: "",
    name: "Trunks",
    power: 10
  }]

  @Output()
  public OnDelete: EventEmitter<string> = new EventEmitter();

  DeleteCharacter(id?:string):void{
    if (!id) return;
    console.log({id});
    this.OnDelete.emit(id);
  }
}
