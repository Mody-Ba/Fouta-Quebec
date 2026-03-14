import { Component ,OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { Event } from '../../models/Events.model';
import {RouterModule} from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {News} from '../../models/news.model';
import {NewsService} from '../../core/services/news';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [RouterModule, MatCard, MatCardTitle, MatCardContent, MatButton, MatCardImage, MatCardActions, MatCardHeader, MatCardSubtitle, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit{

  events: any[] = [];
  newsList: any[] = [];

  selectedImage: string | null = null;

  constructor(
    private eventService: EventService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
    this.newsList = this.newsService.getNews();
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }

}
