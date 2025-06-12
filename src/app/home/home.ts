//Basics
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//MatCards
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

//Meine Projekt Imports
import { BeerCard } from '../beer-card/beer-card';
import {Beer} from '../beer'

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})


export class Home {

  beers: Beer[] =[];

}
