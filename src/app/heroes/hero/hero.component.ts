import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css"
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
}
