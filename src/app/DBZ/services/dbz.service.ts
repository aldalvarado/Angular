import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Injectable({
  providedIn: "root"
})

export class DBZService{
  public Characters: Character[] = [{
    name: "Krillin",
    power: 1000,
  },{
    name: "Goku",
    power: 9500
  }, {
    name: "Vegeta",
    power: 7500
  }];

  OnNewCharacter(character: Character): void {
    this.Characters.push(character);
  }

  OnDeleteCharacter(index:number):void{
    this.Characters.splice(index,1);
  }
}
