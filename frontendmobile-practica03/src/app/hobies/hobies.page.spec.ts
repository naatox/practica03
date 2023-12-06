import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HobiesPage } from './hobies.page';

describe('HobiesPage', () => {
  let component: HobiesPage;
  let fixture: ComponentFixture<HobiesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HobiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
