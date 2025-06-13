import { Component, Input, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../beer';
import { BierlexikonService } from '../service/bierlexikon';
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-beer',
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-beer.html',
  styleUrl: './detail-beer.css'
})
export class DetailBeer {

  
  @Input() beer!: Beer;

  route: ActivatedRoute = inject(ActivatedRoute)
  selectedBeer: Beer | undefined;
  beerService: BierlexikonService = inject(BierlexikonService); 


  constructor(){
    const beers = this.beerService.getBeerById(Number(this.route.snapshot.params['id']));
    this.selectedBeer = Array.isArray(beers) ? beers[0] : beers; 
    
  }
}
