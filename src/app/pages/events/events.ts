import {Component, OnInit} from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { Event } from '../../models/Events.model';
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.html',
  imports: [MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  styleUrls: ['./events.css'],
})
export class EventsComponent implements OnInit{

  events: Event[] = [];

  constructor(private eventService: EventService) {}
    ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
