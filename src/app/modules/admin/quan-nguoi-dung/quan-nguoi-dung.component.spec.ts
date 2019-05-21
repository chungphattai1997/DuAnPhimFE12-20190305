import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanNguoiDungComponent } from './quan-nguoi-dung.component';

describe('QuanNguoiDungComponent', () => {
  let component: QuanNguoiDungComponent;
  let fixture: ComponentFixture<QuanNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
