import { Routes } from '@angular/router';
import { Biermarken } from './biermarken/biermarken';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'biermarken',
        component: Biermarken
    }
];
