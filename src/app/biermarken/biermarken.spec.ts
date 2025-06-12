import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biermarken } from './biermarken';

describe('Biermarken', () => {
  let component: Biermarken;
  let fixture: ComponentFixture<Biermarken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biermarken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Biermarken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
