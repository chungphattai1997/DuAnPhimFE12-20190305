import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietPhongVeComponent } from './chi-tiet-phong-ve.component';

describe('ChiTietPhongVeComponent', () => {
  let component: ChiTietPhongVeComponent;
  let fixture: ComponentFixture<ChiTietPhongVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietPhongVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietPhongVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
