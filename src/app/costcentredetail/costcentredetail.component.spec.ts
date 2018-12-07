import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcentredetailComponent } from './costcentredetail.component';

describe('CostcentredetailComponent', () => {
  let component: CostcentredetailComponent;
  let fixture: ComponentFixture<CostcentredetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostcentredetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostcentredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
