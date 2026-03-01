import { Injectable } from '@angular/core';
import { Event } from '../../models/Events.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: Event[] = [
    {
      title: 'Journée culturelle Fouta',
      date: '15 Juin 2025',
      location: 'Montréal'
    },
    {
      title: 'Conférence Étudiants',
      date: '10 Juillet 2025',
      location: 'Québec'
    },
    {
      title: 'Rencontre communautaire',
      date: '20 Août 2025',
      location: 'Trois-Rivières'
    }
  ];

  getEvents(): Event[] {
    return this.events;
  }

}
