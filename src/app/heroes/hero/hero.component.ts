import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  templateUrl: "./hero.component.html"
})

export class HeroComponent {
  public name: string = "Iron Man";
  public age: number = 45;
}
