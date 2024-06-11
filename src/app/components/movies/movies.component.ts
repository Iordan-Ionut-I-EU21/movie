import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardMovieComponent } from '../card-movie/card-movie.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    HttpClientModule,
    NgFor,
    //Components
    CardMovieComponent,
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})

export class MoviesComponent implements OnInit{
  allMovies: any[] = [];

  constructor(private httpClient: HttpClient){
  }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.httpClient.get<any[]>('assets/data/lastEpisodes.json').subscribe((data:any[]) => this.allMovies = data);
  }
}
