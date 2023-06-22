import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoPaginationBtnComponent } from './modo-pagination-btn.component';

describe('ModoPaginationBtnComponent', () => {
  let component: ModoPaginationBtnComponent;
  let fixture: ComponentFixture<ModoPaginationBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoPaginationBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModoPaginationBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
