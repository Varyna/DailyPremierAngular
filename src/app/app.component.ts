import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApartamentCardComponent } from "./common-ui/apartament-card/apartament-card.component";
import { ApartamentService } from './data/services/apartament.service';
import { Apartaments } from './data/interfaces/apartaments.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApartamentCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  apartamentService = inject(ApartamentService)
  items:Apartaments[]=[]
  
  constructor(){
    this.apartamentService.get()
    .subscribe(val=> {this.items=val})   
  }
  title = 'DailyPremierAngular';
}
