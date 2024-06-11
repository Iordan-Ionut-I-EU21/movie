import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleStartComponent } from './title-start.component';

describe('TitleStartComponent', () => {
  let component: TitleStartComponent;
  let fixture: ComponentFixture<TitleStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
