import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Floatlabel } from './floatlabel';

describe('Floatlabel', () => {
  let component: Floatlabel;
  let fixture: ComponentFixture<Floatlabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Floatlabel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Floatlabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
