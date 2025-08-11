import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadaster } from './cadaster';

describe('Cadaster', () => {
  let component: Cadaster;
  let fixture: ComponentFixture<Cadaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadaster);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
