import { Component, NgModule, OnInit } from '@angular/core';
import { HomeRecenteComponent } from '../home-recente/home-recente.component';
import { NgFor } from '@angular/common';
import { CardMovieComponent } from '../card-movie/card-movie.component';
import { CardActorComponent } from '../card-actor/card-actor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule,
    //Components
    HomeRecenteComponent,
    CardMovieComponent,
    CardActorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  lastEpisodes: any[] = [];
  actors: any[] = [];

  constructor(private httpClient: HttpClient){

  }

  ngOnInit() {
    this.getLastEpisodes();
    this.getActors();
  }

  getLastEpisodes(){
    this.httpClient.get<any[]>('assets/data/lastEpisodes.json').subscribe((data:any[]) => this.lastEpisodes = data);
  }

  getActors(){
    this.httpClient.get<any[]>('assets/data/actors.json').subscribe((data:any[]) => this.actors = data);
  }

}

