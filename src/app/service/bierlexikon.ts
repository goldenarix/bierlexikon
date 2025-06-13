import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Beer } from '../beer';

@Injectable({
  providedIn: 'root'
})
export class BierlexikonService {

  private beers: Beer[] = [
    {
      id: 1,
      name: 'Augustiner Lagerbier Hell',
      type: 'Lager',
      brewery: 'Augustiner-Bräu',
      alcohol: 5.2,
      ibu: 18,
      description: 'Ein klassisches bayerisches Helles mit ausgewogener Hopfennote und malzigem Charakter.',
      rating: 4.5,
      country: 'Deutschland',
      image: 'augustiner.png'
    },
    {
      id: 2,
      name: 'Weihenstephaner Hefeweissbier',
      type: 'Weizen',
      brewery: 'Weihenstephaner',
      alcohol: 5.4,
      ibu: 14,
      description: 'Ein traditionelles Weißbier mit fruchtigen Aromen von Banane und Nelke.',
      rating: 4.3,
      country: 'Deutschland',
      image: 'weihenstephaner.jpg'
    },
    {
      id: 3,
      name: 'Guinness Draught',
      type: 'Stout',
      brewery: 'Guinness',
      alcohol: 4.2,
      ibu: 45,
      description: 'Ein cremiges irisches Stout mit röstigen Malzaromen und charakteristischem Schaum.',
      rating: 4.1,
      country: 'Irland',
      image: 'assets/guinness.jpg'
    },
    {
      id: 4,
      name: 'Pilsner Urquell',
      type: 'Pils',
      brewery: 'Pilsner Urquell',
      alcohol: 4.4,
      ibu: 40,
      description: 'Das Original-Pilsner aus Tschechien mit hopfiger Bitterkeit und goldener Farbe.',
      rating: 4.2,
      country: 'Tschechien',
      image: 'assets/pilsner-urquell.jpg'
    },
    {
      id: 5,
      name: 'Stone IPA',
      type: 'IPA',
      brewery: 'Stone Brewing',
      alcohol: 6.9,
      ibu: 77,
      description: 'Ein intensives amerikanisches IPA mit ausgeprägten Zitrus- und Kiefernaromen.',
      rating: 4.0,
      country: 'USA',
      image: 'assets/stone-ipa.jpg'
    },
    {
      id: 6,
      name: 'Erdinger Weißbier',
      type: 'Weizen',
      brewery: 'Erdinger',
      alcohol: 5.3,
      ibu: 12,
      description: 'Ein erfrischendes bayerisches Weißbier mit natürlicher Trübung.',
      rating: 4.1,
      country: 'Deutschland',
      image: 'assets/erdinger.jpg'
    },
    {
      id: 7,
      name: 'Stella Artois',
      type: 'Lager',
      brewery: 'Stella Artois',
      alcohol: 5.0,
      ibu: 24,
      description: 'Ein belgisches Premium-Lager mit elegantem Geschmack.',
      rating: 3.8,
      country: 'Belgien',
      image: 'assets/stella-artois.jpg'
    },
    {
      id: 8,
      name: 'Löwenbräu Original',
      type: 'Lager',
      brewery: 'Löwenbräu',
      alcohol: 5.2,
      ibu: 20,
      description: 'Ein Münchener Original mit vollmundigem Geschmack.',
      rating: 4.0,
      country: 'Deutschland',
      image: 'assets/loewenbraeu.jpg'
    }
  ];

  constructor() { }

  getAllBeers(): Observable<Beer[]> {
    return of([...this.beers]).pipe(delay(500));
  }

  getBeerById(id: number): Observable<Beer | undefined> {
    const beer = this.beers.find(b => b.id === id);
    return of(beer).pipe(delay(300));
  }

  getBeersByType(type: string): Observable<Beer[]> {
    if (!type) {
      return this.getAllBeers();
    }
    const filteredBeers = this.beers.filter(beer => 
      beer.type.toLowerCase() === type.toLowerCase()
    );
    return of(filteredBeers).pipe(delay(400));
  }

  getBeerByName(name: string): Observable<Beer[]> {
    if (!name) {
      return of([...this.beers]);
    } else {
      const filteredBeers = this.beers.filter(beer =>
        beer.name.toLowerCase().includes(name.toLowerCase())
      );
      return of(filteredBeers).pipe(delay(300));
    }
  }


  getFeaturedBeers(): Observable<Beer[]> {
    const featured = this.beers
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
    return of(featured).pipe(delay(300));
  }
}