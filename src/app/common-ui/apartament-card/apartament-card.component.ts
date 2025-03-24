import { Component,  Input } from '@angular/core';
import { Apartment } from '../../data/interfaces/apartment.interface';

@Component({
  selector: 'app-apartament-card',
  standalone:true,
  imports: [],
  templateUrl: './apartament-card.component.html',
  styleUrl: './apartament-card.component.scss'
})
export class ApartamentCardComponent {
  @Input() apartment!: Apartment;
}
