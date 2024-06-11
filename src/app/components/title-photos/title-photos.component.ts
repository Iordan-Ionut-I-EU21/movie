import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-photos',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './title-photos.component.html',
  styleUrl: './title-photos.component.css'
})
export class TitlePhotosComponent implements OnInit {
  slides: any[] = [];

  constructor(private httpClient: HttpClient){

  }
  ngOnInit(): void {
    this.getSlides();
  }

  getSlides(){
    this.httpClient.get<any[]>('assets/data/slides.json').subscribe((data:any[]) => this.slides = data);
  }
  
  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
  }
}
