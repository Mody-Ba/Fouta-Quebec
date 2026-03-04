import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-services',
  imports: [MatCardModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent {

}
