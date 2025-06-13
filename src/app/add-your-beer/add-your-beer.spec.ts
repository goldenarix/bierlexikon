import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYourBeer } from './add-your-beer';

describe('AddYourBeer', () => {
  let component: AddYourBeer;
  let fixture: ComponentFixture<AddYourBeer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddYourBeer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddYourBeer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
