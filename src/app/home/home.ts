import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Beer } from '../beer';
import { BierlexikonService } from '../service/bierlexikon';
import { BeerCardComponent } from '../beer-card/beer-card';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, 
    RouterModule,
    MatCardModule, 
    MatButtonModule, 
    MatIconModule,
    BeerCardComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  // beers -> Array das nur Objekte vom typ Beer habn darf 
  beers: Beer[] = [];



  // den Bierlesikon holen
  bierlexikonService: BierlexikonService = inject(BierlexikonService);

  constructor() {
    this.loadFeaturedBeers();
  }

  private loadFeaturedBeers(): void {
    // erstnak nur die featured beers laden für homepage 

    this.beers = this.bierlexikonService.getFeaturedBeers();
    
   
    console.log('Featured Biere geladen:', this.beers.length);
    
    if (this.beers.length === 0) {
      console.warn('Keine Featured Biere gefunden!');
    }

  
  }


}