import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { NewsService } from '../../core/services/news';
import { News } from '../../models/news.model';
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone: true,
  imports: [RouterModule,MatButtonModule
  ],
  templateUrl: './news-detail.html',
  styleUrl: './news-detail.css'
})
export class NewsDetailComponent implements OnInit {

  news?: News;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.news = this.newsService.getNewsById(id);
  }
}
