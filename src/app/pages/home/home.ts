import { Component ,OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { Event } from '../../models/Events.model';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
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
