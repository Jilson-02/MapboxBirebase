import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LottiePage } from './lottie.page';

describe('LottiePage', () => {
  let component: LottiePage;
  let fixture: ComponentFixture<LottiePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LottiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
