import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../core/services/event.service';
import { Event } from '../../models/Events.model';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css'
})
export class EventDetailComponent implements OnInit {

  event?: Event;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.eventService.getEventById(id);
  }

}
