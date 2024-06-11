import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSimilaryComponent } from './title-similary.component';

describe('TitleSimilaryComponent', () => {
  let component: TitleSimilaryComponent;
  let fixture: ComponentFixture<TitleSimilaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleSimilaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleSimilaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
