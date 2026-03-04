import { Injectable } from '@angular/core';
import { Event } from '../../models/Events.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: Event[] = [
    {
      id: 1,
      title: 'Journée culturelle Fouta',
      date: '15 Juin 2025',
      location: 'Montréal'
    },
    {
      id: 2,
      title: 'Conférence Étudiants',
      date: '10 Juillet 2025',
      location: 'Québec'
    },
    {
      id: 3,
      title: 'Rencontre communautaire',
      date: '20 Août 2025',
      location: 'Trois-Rivières'
    }
  ];

  getEvents(): Event[] {
    return this.events;
  }
  getEventById(id: number): Event | undefined {
    return this.events.find(e => e.id === id);
  }

}
