import { Component } from '@angular/core';
import { cribs } from '../../data/cribs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  cribs: Array<any> = cribs;
}
