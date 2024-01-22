import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/Components/counter/counter.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DbzModule } from './DBZ/dbz.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent , HeroesComponent, DbzModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
  public title: string = "Hello World"
}
