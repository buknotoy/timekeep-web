import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcentreComponent } from './costcentre.component';

describe('CostcentreComponent', () => {
  let component: CostcentreComponent;
  let fixture: ComponentFixture<CostcentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostcentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
