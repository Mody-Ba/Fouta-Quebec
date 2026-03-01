import { Component ,OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { Event } from '../../models/Events.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

}
