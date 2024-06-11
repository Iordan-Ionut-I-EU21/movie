import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePhotosComponent } from './title-photos.component';

describe('TitlePhotosComponent', () => {
  let component: TitlePhotosComponent;
  let fixture: ComponentFixture<TitlePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlePhotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitlePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
