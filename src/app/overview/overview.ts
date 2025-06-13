import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { Beer } from '../beer';
import { BierlexikonService } from '../service/bierlexikon';
import { BeerCardComponent } from '../beer-card/beer-card';

@Component({
  selector: 'app-overview',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    BeerCardComponent
  ],
  templateUrl: './overview.html',
  styleUrl: './overview.css'
})
export class OverviewComponent {

  // Drei Arrays für verschiedene Daten-Zustände
  beers: Beer[] = [];           // Hauptdaten-Array
  filteredBeers: Beer[] = [];   // Was gerade angezeigt wird
  allBeers: Beer[] = [];        // Backup für Filter-Resets
  
  // Service-Injection bleibt gleich
  bierlexikonService: BierlexikonService = inject(BierlexikonService);

  // Filter-Optionen als Arrays - diese könnten auch dynamisch aus den Daten generiert werden
  beerTypes: string[] = ['Lager', 'Weizen', 'Pils', 'Stout', 'IPA'];
  countries: string[] = ['Deutschland', 'Irland', 'Tschechien', 'USA', 'Belgien'];

  constructor() {
    // Beim Start alle Biere laden
    this.loadAllBeers();
  }

  // Die Haupt-Lade-Methode - jetzt ohne Observable-Komplexität
  private loadAllBeers(): void {
    // Direkter Aufruf des Services - sofortige Rückgabe
    this.beers = this.bierlexikonService.getAllBeers();
    
    // Alle drei Arrays mit den gleichen Daten füllen
    this.allBeers = [...this.beers];        // Spread-Operator erstellt Kopie
    this.filteredBeers = [...this.beers];   // Anfangs werden alle Biere angezeigt
    
    console.log('Alle Biere geladen:', this.beers.length);
  }

  // Name-Filter-Methode - vereinfacht ohne Observable
  getBeerByName(name: string): void {
    if (!name) {
      // Leerer String bedeutet Filter zurücksetzen
      this.filteredBeers = [...this.allBeers];
      console.log('Name-Filter zurückgesetzt');
    } else {
      // Service aufrufen und Ergebnis direkt zuweisen
      this.filteredBeers = this.bierlexikonService.getBeerByName(name);
      console.log(`Nach Name '${name}' gefiltert:`, this.filteredBeers.length, 'Biere');
    }
  }

  // Typ-Filter-Methode - ebenfalls vereinfacht
  getBeerByType(type: string): void {
    if (!type) {
      this.filteredBeers = [...this.allBeers];
      console.log('Type-Filter zurückgesetzt');
    } else {
      // Direkter Service-Aufruf ohne Observable-Handling
      this.filteredBeers = this.bierlexikonService.getBeersByType(type);
      console.log(`Nach Typ '${type}' gefiltert:`, this.filteredBeers.length, 'Biere');
    }
  }

  // Land-Filter - hier machst du die Filterung direkt in der Komponente
  getBeerByCountry(country: string): void {
    if (!country) {
      this.filteredBeers = [...this.allBeers];
      console.log('Country-Filter zurückgesetzt');
    } else {
      // Lokale Filterung mit Array.filter() - kein Service-Aufruf nötig
      this.filteredBeers = this.allBeers.filter(beer =>
        beer.country.toLowerCase() === country.toLowerCase()
      );
      console.log(`Nach Land '${country}' gefiltert:`, this.filteredBeers.length, 'Biere');
    }
  }

  // Filter-Reset-Methode - sehr einfach
  resetFilters(): void {
    // Alle gefilterten Biere zurück auf den ursprünglichen Zustand setzen
    this.filteredBeers = [...this.allBeers];
    console.log('Alle Filter zurückgesetzt:', this.filteredBeers.length, 'Biere');
  }
}