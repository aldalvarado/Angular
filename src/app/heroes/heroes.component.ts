import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@Component({
  standalone: true,
  selector: "Heroes-Component",
  imports: [HeroComponent, ListComponent],
  templateUrl: "./heroes.component.html"
})
export class HeroesComponent{}
