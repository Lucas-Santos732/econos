import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultIndexLayout } from './default-index-layout';

describe('DefaultIndexLayout', () => {
  let component: DefaultIndexLayout;
  let fixture: ComponentFixture<DefaultIndexLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultIndexLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultIndexLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
