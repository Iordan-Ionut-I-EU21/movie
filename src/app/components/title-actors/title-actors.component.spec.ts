import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleActorsComponent } from './title-actors.component';

describe('TitleActorsComponent', () => {
  let component: TitleActorsComponent;
  let fixture: ComponentFixture<TitleActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleActorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
