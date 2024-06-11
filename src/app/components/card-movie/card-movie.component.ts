import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './card-movie.component.html',
  styleUrl: './card-movie.component.css'
})
export class CardMovieComponent {
  @Input() idMovie: string;
  @Input() title: string;
  @Input() image: string;
  @Input() stars: string;
  @Input() link: string;
  @Input() status: string;

  constructor(){
    this.idMovie = '';
    this.title = '';
    this.image = '';
    this.stars = '';
    this.link = '';
    this.status = '';
  }
}
