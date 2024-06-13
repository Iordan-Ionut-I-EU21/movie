import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-recente',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    HttpClientModule,
    //Componets

  ],
  templateUrl: './home-recente.component.html',
  styleUrl: './home-recente.component.css'
})
export class HomeRecenteComponent implements OnInit{
  currentSlide = 0;
  slides: any[] = [];

  constructor(private httpClient: HttpClient){}

  ngOnInit() {
    this.getSlides();
  }

  getSlides(){
    this.httpClient.get<any[]>('assets/data/slides.json').subscribe((data:any[]) => this.slides = data);
  }


  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
  }
}
