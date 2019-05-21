import { TestBed } from '@angular/core/testing';

import { NhanVienService } from './nhan-vien.service';

describe('NhanVienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NhanVienService = TestBed.get(NhanVienService);
    expect(service).toBeTruthy();
  });
});
