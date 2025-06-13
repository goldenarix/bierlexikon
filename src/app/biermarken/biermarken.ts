import { Component, inject } from '@angular/core';
import { Beer } from '../beer';
import { BierlexikonService } from '../service/bierlexikon';

@Component({
  selector: 'app-biermarken',
  imports: [],
  templateUrl: './biermarken.html',
  styleUrl: './biermarken.css'
})
export class Biermarken {
  Biere: BierlexikonService = inject(BierlexikonService);
  selectedBeer: Beer | undefined;

  constructor(){
    this.selectedBeer = 
  }
}
