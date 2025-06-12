import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCard } from './beer-card';

describe('BeerCard', () => {
  let component: BeerCard;
  let fixture: ComponentFixture<BeerCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
