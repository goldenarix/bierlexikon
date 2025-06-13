import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Beer } from '../beer';

@Component({
  selector: 'app-beer-card',
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './beer-card.html',
  styleUrl: './beer-card.css'
})
export class BeerCardComponent {
  
  @Input() beer!: Beer;

  getBeerInfo(beer: Beer): void {
    console.log('Beer Info:', beer);
  }

  addToFavorites(beer: Beer): void {
    console.log('Added to favorites:', beer.name);
    // Hier würde man einen Service aufrufen
    alert(`${beer.name} wurde zu deinen Favoriten hinzugefügt!`);
  }

  getStarArray(): boolean[] {
    const stars: boolean[] = [];
    const fullStars = Math.floor(this.beer.rating);
    
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars);
    }
    
    return stars;
  }
}