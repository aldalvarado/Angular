import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public HeroNames: string[] = ["Spider Man", "Iron Man", "Hulk", "Thor", "She-Hulk"];
  public DeletedHeroes?: string;
  RemoveLastHero():void {
   this.DeletedHeroes = this.HeroNames.pop();
  }
}
