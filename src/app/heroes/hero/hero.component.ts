import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})

export class HeroComponent {
  public name: string = "Iron Man";
  public age: number = 45;

  get CapitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  ChangeName():void {
    this.name = "Spider Man";
  }

  ChangeAge():void {
    this.age = 23;
  }

  ResetHeroes():void {
    this.name = "Iron Man";
    this.age = 45;
  }
}
