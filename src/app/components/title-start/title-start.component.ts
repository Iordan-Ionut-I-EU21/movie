import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-start',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    HttpClientModule,
    //Components

  ],
  templateUrl: './title-start.component.html',
  styleUrl: './title-start.component.css'
})
export class TitleStartComponent implements OnInit, AfterViewInit{
  slides: any[] = [];
  groupSlides: any[] = [];
  currentSlide = 0;

  constructor(private httpClient: HttpClient){}

  ngAfterViewInit(): void {
    this.groupSlidesFromat();
  }

  ngOnInit(): void {
    this.getSlides();
  }

  groupSlidesFromat(){
    for (let i = 0; i < this.slides.length; i += 3) {
      this.groupSlides.push(this.slides.slice(i, i + 3));
    }
  }

  getSlides(){
    this.httpClient.get<any[]>('assets/data/slides.json').subscribe((data:any[]) => this.slides = data);
  }
  
  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.groupSlides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.groupSlides.length - 1) ? 0 : this.currentSlide + 1;
  }
}
