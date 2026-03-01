import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fouta-quebec-front');
}
