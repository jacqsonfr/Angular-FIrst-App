import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturalComponent } from './estrutural.component';

describe('EstruturalComponent', () => {
  let component: EstruturalComponent;
  let fixture: ComponentFixture<EstruturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
