import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Beer } from '../beer';

@Injectable({
  providedIn: 'root'
})
export class BierlexikonService {

  beers: Beer[] = [
    {
      id: 1,
      name: 'Augustiner Lagerbier Hell',
      type: 'Lager',
      brauerei: 'Augustiner-Bräu',
      alkoholAnteil: 5.2,
      internationalBitternessUnits: 18,
      beschreibung: 'Ein klassisches bayerisches Helles mit ausgewogener Hopfennote und malzigem Charakter.',
      bewertung: 4.5,
      herkunftsland: 'Deutschland',
      bild: 'assets/augustiner.jpg',
      preis: 100
    },
    
  ];

  constructor() { }

  getAllBeers()  {
    
  }

  getBeerById() {
   
  }

 
}
