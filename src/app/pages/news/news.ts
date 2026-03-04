import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news';
import { News } from '../../models/news.model';
import {RouterLink} from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone: true,
  templateUrl: './news.html',
  styleUrl: './news.css',
  imports: [
    RouterLink,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatButtonModule

  ]
})
export class NewsComponent implements OnInit {

  newsList: News[] = [];
  item: any | string;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsList = this.newsService.getNews();
  }
}
