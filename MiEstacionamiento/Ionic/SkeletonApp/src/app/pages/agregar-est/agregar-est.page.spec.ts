import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarEstPage } from './agregar-est.page';

describe('AgregarEstPage', () => {
  let component: AgregarEstPage;
  let fixture: ComponentFixture<AgregarEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
