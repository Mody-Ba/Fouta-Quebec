import {Component, OnInit} from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { Event } from '../../models/Events.model';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class EventsComponent implements OnInit{

  events: Event[] = [];

  constructor(private eventService: EventService) {}
    ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
