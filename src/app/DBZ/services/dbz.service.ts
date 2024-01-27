import { Injectable } from "@angular/core";
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: "root"
})

export class DBZService{
  public Characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 1000,
  },{
    id: uuid(),
    name: "Goku",
    power: 9500
  }, {
    id: uuid(),
    name: "Vegeta",
    power: 7500,
  }];

  AddCharacter(character: Character): void {
    const NewCharacter: Character = { id: uuid(), ...character };
    this.Characters.push(NewCharacter);
  }

  DeleteCharacterByID(ID:string){
    this.Characters = this.Characters.filter ( Character => Character.id !== ID);
  }

}
