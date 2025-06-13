import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Beer } from '../beer';
import { MatSelectModule } from '@angular/material/select';
import { BierlexikonService } from '../service/bierlexikon';

@Component({
  selector: 'app-add-your-beer',
  imports: [RouterLink, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './add-your-beer.html',
  styleUrl: './add-your-beer.css'
})
export class AddYourBeer {
   constructor(private beerService: BierlexikonService) {}


  beerForm= new FormGroup({
    BeerName: new FormControl(''),
    alcohol: new FormControl(''),
    Land: new FormControl(''),
    brewery: new FormControl('')
  })


  saveBeer(){
    console.log(`Folgendes Bier wird angelegt: ${JSON.stringify(this.beerForm.value)}`)
      const beer: Beer = {
      id: 0, // wird im Service gesetzt
      name: this.beerForm.value.BeerName ?? '',
      alcohol: Number(this.beerForm.value.alcohol) || 0,
      country: this.beerForm.value.Land ?? '',
      type: '',
      brewery: '',
      description: '',
      rating: 0,
      ibu: 0,
      image: ''
  };
  this.beerService.addBear(beer);
  console.log('Dieses Bieer wurde hinzugefügt: ', beer);
  this.beerForm.reset();
  }

}
