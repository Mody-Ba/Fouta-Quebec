import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ServicesComponent } from './pages/services/services';
import { EventsComponent } from './pages/events/events';
import { ContactComponent } from './pages/contact/contact';
import { LoginComponent } from './auth/login/login';
import { DashboardComponent } from './admin/dashboard/dashboard';
import { NavBarComponent } from './shared/navbar/navbar';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'shared', component: NavBarComponent },
];
