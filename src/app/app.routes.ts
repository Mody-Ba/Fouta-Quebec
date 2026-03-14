import { Routes } from '@angular/router';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ServicesComponent } from './pages/services/services';
import { EventsComponent } from './pages/events/events';
import { ContactComponent } from './pages/contact/contact';
import { LoginComponent } from './auth/login/login';
import { DashboardComponent } from './admin/dashboard/dashboard';
import {EventDetailComponent} from './pages/event-detail/event-detail';
import {NewsComponent} from './pages/news/news';
import {GalleryComponent} from './pages/gallery/gallery';
import {MemberComponent} from './member/member';
import {RegisterComponent} from './auth/register/register';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'news', component:NewsComponent },
  { path: 'gallery', component:GalleryComponent },

  { path: 'member', component: MemberComponent },
  { path:'register', component:RegisterComponent },


  {
    path: 'events/:id',
    loadComponent: () =>
      import('./pages/event-detail/event-detail')
        .then(m => m.EventDetailComponent)
  },
  {
    path: 'news/:id',
    loadComponent: () =>
      import('./pages/news-detail/news-detail')
        .then(m => m.NewsDetailComponent)
  }
];
