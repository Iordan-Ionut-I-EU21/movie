import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleStoryComponent } from './title-story.component';

describe('TitleStoryComponent', () => {
  let component: TitleStoryComponent;
  let fixture: ComponentFixture<TitleStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleStoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
