import { Routes } from '@angular/router';
import { Biermarken } from './biermarken/biermarken';
import { HomeComponent } from './home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'biermarken',
        component: Biermarken
    }
];
