import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoScrollComponent } from './modo-scroll.component';

describe('ModoScrollComponent', () => {
  let component: ModoScrollComponent;
  let fixture: ComponentFixture<ModoScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModoScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
