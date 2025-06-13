import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { Beer } from '../beer';
import { BierlexikonService } from '../service/bierlexikon';

import { BeerCardComponent } from '../beer-card/beer-card';

interface Statistic {
  icon: string;
  value: string;
  label: string;
  color: string;
}

@Component({
  selector: 'app-home',
  imports: [
    CommonModule, 
    RouterModule,
    MatCardModule, 
    MatButtonModule, 
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    BeerCardComponent
  ],
  templateUrl: '../home/home.html',
  styleUrl: '../home/home.css'
})
export class HomeComponent {

  beers: Beer[] = [];
  filteredBeers: Beer[] = [];
  allBeers: Beer[] = [];
  bierlexikonService: BierlexikonService = inject(BierlexikonService);

  statistics: Statistic[] = [
    { icon: 'sports_bar', value: '500+', label: 'Biersorten', color: '#FFD700' },
    { icon: 'factory', value: '200+', label: 'Brauereien', color: '#FF6B35' },
    { icon: 'people', value: '10k+', label: 'Community', color: '#4CAF50' },
    { icon: 'star', value: '25k+', label: 'Bewertungen', color: '#2196F3' }
  ];

  constructor() {
    this.loadBeers();
  }

  private loadBeers(): void {
    this.bierlexikonService.getAllBeers().subscribe({
      next: (beers) => {
        this.beers = beers;
        this.allBeers = [...beers];
        this.filteredBeers = [...beers];
      },
      error: (error) => {
        console.error('Fehler beim Laden der Biere:', error);
      }
    });
  }

  filterBeers(name: string, type: string, country: string): void {
    this.filteredBeers = this.allBeers.filter(beer => {
      const nameMatch = !name || beer.name.toLowerCase().includes(name.toLowerCase());
      const typeMatch = !type || beer.type.toLowerCase() === type.toLowerCase();
      const countryMatch = !country || beer.country.toLowerCase().includes(country.toLowerCase());
      
      return nameMatch && typeMatch && countryMatch;
    });

    console.log(`Filter angewendet: ${this.filteredBeers.length} Biere gefunden`);
  }

  resetFilter(): void {
    this.filteredBeers = [...this.allBeers];
    console.log('Filter zurückgesetzt');
  }



  scrollToBeers(): void {
    const element = document.getElementById('beers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
