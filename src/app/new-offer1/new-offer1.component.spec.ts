import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOffer1Component } from './new-offer1.component';

describe('NewOffer1Component', () => {
  let component: NewOffer1Component;
  let fixture: ComponentFixture<NewOffer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewOffer1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewOffer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
