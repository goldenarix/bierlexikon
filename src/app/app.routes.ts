import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { OverviewComponent } from './overview/overview';
import { DetailBeer } from './detail-beer/detail-beer';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },

  { path: 'home',
    component: HomeComponent
  },

  { 
    path: 'overview',
    component: OverviewComponent 
  }, 

  { path: 'detail-beer/:id',
    component: DetailBeer
 },

  { 
    path: '**', 
    redirectTo: '/home' 
  }
];
