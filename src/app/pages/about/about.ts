import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-about',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {

}
