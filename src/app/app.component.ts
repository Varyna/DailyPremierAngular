import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApartamentCardComponent } from "./common-ui/apartament-card/apartament-card.component";
import { ApartamentService } from './data/services/apartament.service';
import { Apartment } from './data/interfaces/apartment.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApartamentCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  apartamentService = inject(ApartamentService)
  apartaments:Apartment[]=[]
  
  constructor(){
    this.apartamentService.get().subscribe(apartament=> {this.apartaments=apartament})   
  }
}



