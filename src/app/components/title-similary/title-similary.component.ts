import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardMovieComponent } from '../card-movie/card-movie.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-title-similary',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule,
    //Components
    CardMovieComponent,
  ],
  templateUrl: './title-similary.component.html',
  styleUrl: './title-similary.component.css'
})
export class TitleSimilaryComponent implements OnInit {
  lastEpisodes: any[] = [];

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    this.getLastEpisodes();
  }

  getLastEpisodes(): void {
    this.httpClient.get<any[]>('assets/data/lastEpisodes.json').subscribe((data: any[]) => (this.lastEpisodes = data));
  }
}
