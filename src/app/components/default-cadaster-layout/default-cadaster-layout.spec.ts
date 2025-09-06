import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCadasterLayout } from './default-cadaster-layout';

describe('DefaultCadasterLayout', () => {
  let component: DefaultCadasterLayout;
  let fixture: ComponentFixture<DefaultCadasterLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCadasterLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultCadasterLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
