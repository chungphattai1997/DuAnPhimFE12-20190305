export class NguoiDung {
    public TaiKhoan: string;
    public HoTen: string;
    public MatKhau: string;
    public SoDT: string;
    public Email: string;
    public reMatKhau: string;
    // tslint:disable-next-line:no-inferrable-types
    public MaNhom: string;
    public MaLoaiNguoiDung;
    constructor(taiKhoan: string, hoTen: string, matKhau: string, soDT: string, email: string) {
        this.TaiKhoan = taiKhoan;
        this.HoTen = hoTen;
        this.Email = email;
        this.MatKhau = matKhau;
        this.SoDT = soDT;
        this.MaNhom = 'GP02';
        this.MaLoaiNguoiDung = 'KhachHang';
    }
} 