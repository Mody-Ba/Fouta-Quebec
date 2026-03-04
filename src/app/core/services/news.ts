import { Injectable } from '@angular/core';
import { News } from '../../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news: News[] = [
    {
      id: 1,
      title: 'Lancement officiel Fouta-Québec',
      date: '01 Mars 2025',
      content: 'L’association Fouta-Québec est officiellement lancée.'
    },
    {
      id: 2,
      title: 'Nouvelle collaboration étudiante',
      date: '15 Avril 2025',
      content: 'Partenariat avec plusieurs universités québécoises.'
    }
  ];

  getNews(): News[] {
    return this.news;
  }
  getNewsById(id: number) {
    return this.news.find(n => n.id === id);
  }
}
