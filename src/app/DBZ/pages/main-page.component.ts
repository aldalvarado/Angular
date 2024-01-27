import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})

export class MainPageComponent {
  constructor(public DbzService: DBZService) {
  }
}
