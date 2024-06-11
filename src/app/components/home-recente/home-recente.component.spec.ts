import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecenteComponent } from './home-recente.component';

describe('HomeRecenteComponent', () => {
  let component: HomeRecenteComponent;
  let fixture: ComponentFixture<HomeRecenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRecenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeRecenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
