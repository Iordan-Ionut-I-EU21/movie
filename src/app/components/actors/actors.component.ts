import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardActorComponent } from '../card-actor/card-actor.component';

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule,
    //Components  
    CardActorComponent,
  ],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.css'
})

export class ActorsComponent implements OnInit{
  allActors: any[] = [];

  constructor(private httpClient: HttpClient){
  }

  ngOnInit() {
    this.getAllActors();
  }

  getAllActors() {
    this.httpClient.get<any[]>('assets/data/actors.json').subscribe((data:any[]) => this.allActors = data);
  }
}
