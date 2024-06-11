import { Component, OnInit } from '@angular/core';
import { CardActorComponent } from '../card-actor/card-actor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-title-actors',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule,
    //Components
    CardActorComponent,  
  ],
  templateUrl: './title-actors.component.html',
  styleUrl: './title-actors.component.css'
})
export class TitleActorsComponent implements OnInit {
  actors: any[] = [];

  constructor(private httpClient: HttpClient){
  }

  ngOnInit() {
    this.getActors();
  }

  getActors(){
    this.httpClient.get<any[]>('assets/data/actors.json').subscribe((data:any[]) => this.actors = data);
  }
}
