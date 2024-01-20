import { Component } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "heroes-module",
  template: "Module is working",
  imports: [HeroComponent, ListComponent, CommonModule, RouterOutlet],
  standalone: true,
})

export class HeroesComponent{}
