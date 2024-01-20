import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { CounterComponent } from "./Components/counter/counter.component";

@Component({
  selector: "heroes-module",
  template: "Module is working",
  imports: [CounterComponent, CommonModule, RouterOutlet],
  standalone: true,
})

export class CountersComponent{}
