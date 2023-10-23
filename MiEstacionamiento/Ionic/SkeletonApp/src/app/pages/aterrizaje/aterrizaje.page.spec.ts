import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AterrizajePage } from './aterrizaje.page';

describe('AterrizajePage', () => {
  let component: AterrizajePage;
  let fixture: ComponentFixture<AterrizajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AterrizajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
