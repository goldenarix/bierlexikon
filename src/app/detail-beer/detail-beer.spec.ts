import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBeer } from './detail-beer';

describe('DetailBeer', () => {
  let component: DetailBeer;
  let fixture: ComponentFixture<DetailBeer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBeer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBeer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
