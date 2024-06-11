import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardActorComponent } from '../card-actor/card-actor.component';
import { CardMovieComponent } from '../card-movie/card-movie.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule,
    //Components
    CardActorComponent,
    CardMovieComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  lastEpisodes: any[] = [];
  actors: any[] = [];

  constructor(private httpClient: HttpClient){
  }

  ngOnInit(): void {
    this.getLastEpisodes();
    this.getActors();
  }

  getLastEpisodes(): void {
    this.httpClient.get<any[]>('assets/data/lastEpisodes.json').subscribe((data:any[]) => (this.lastEpisodes = data));
  }

  getActors(): void{
    this.httpClient.get<any[]>('assets/data/actors.json').subscribe((data:any[]) => (this.actors = data))
  }
}
