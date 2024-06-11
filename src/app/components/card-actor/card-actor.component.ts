import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-actor',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './card-actor.component.html',
  styleUrl: './card-actor.component.css'
})
export class CardActorComponent {
  @Input() idActor: string;
  @Input() image: string;
  @Input() name: string;
  @Input() lastAparition: string;

  constructor(){
    this.idActor = '';
    this.image = '';
    this.name = '';
    this.lastAparition = '';
  }

}
