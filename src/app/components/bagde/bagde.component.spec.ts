import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagdeComponent } from './bagde.component';

describe('BagdeComponent', () => {
  let component: BagdeComponent;
  let fixture: ComponentFixture<BagdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
