import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardMovieComponent } from '../card-movie/card-movie.component';

@Component({
  selector: 'app-serials',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule,
    //Components
    CardMovieComponent,
  ],
  templateUrl: './serials.component.html',
  styleUrl: './serials.component.css'
})
export class SerialsComponent implements OnInit{
  allSerials: any[] = [];

  constructor(private httpClient: HttpClient){
  }

  ngOnInit() {
    this.getAllSerials();
  }

  getAllSerials() {
    this.httpClient.get<any[]>('assets/data/lastEpisodes.json').subscribe((data:any[]) => this.allSerials = data);
  }
}
