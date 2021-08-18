import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBulmaComponent } from './angular-bulma.component';

describe('AngularBulmaComponent', () => {
  let component: AngularBulmaComponent;
  let fixture: ComponentFixture<AngularBulmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularBulmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBulmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
