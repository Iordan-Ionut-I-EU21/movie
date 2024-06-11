import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialsComponent } from './serials.component';

describe('SerialsComponent', () => {
  let component: SerialsComponent;
  let fixture: ComponentFixture<SerialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
