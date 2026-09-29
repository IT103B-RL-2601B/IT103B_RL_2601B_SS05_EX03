

# Báo Cáo Kiểm Thử & Chuẩn Hóa Dữ Liệu Phân Công Ca Trực

## 1. Mục Tiêu Dự Án

- Bóc tách chuỗi dữ liệu nén lịch phân công khám chữa bệnh định dạng phân tách (Delimited String Parsing).
- Ứng dụng các phương thức xử lý chuỗi cơ bản: `.split()`, `.slice()`, `.toUpperCase()`, `.toLowerCase()`, `.replace()`.
- Chuẩn hóa viết hoa chữ cái đầu (Title Case) cho tên bác sĩ và tên chuyên khoa.
- Hiển thị kết quả bằng bảng thông báo tại cửa phòng khám bằng Template Literals.

---

## 2. Bảng Ca Kiểm Thử (Test Cases)

|     STT     | Mã kiểm thử             | Chuỗi dữ liệu đầu vào                         | Chi tiết bóc tách & Chuẩn hóa mong đợi                                                                                                     |
| :----------: | :------------------------- | :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **01** | `TC_01` (Gốc đề bài) | `BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302` | •**Bác sĩ:** BS. Nguyễn Văn Hải• **Chuyên khoa:** Khoa Tim Mạch• **Thời gian:** 08:30• **Phòng:** Phòng 302 |
| **02** | `TC_02` (Ca sáng)       | `BS.tran_thi_mai-KHOA_NOI_TIET-09:15-PHONG_105`   | •**Bác sĩ:** BS. Trần Thị Mai• **Chuyên khoa:** Khoa Nội Tiết• **Thời gian:** 09:15• **Phòng:** Phòng 105   |
| **03** | `TC_03` (Ca chiều)      | `BS.le_hoang_nam-KHOA_CAP_CUU-13:45-PHONG_408`    | •**Bác sĩ:** BS. Lê Hoàng Nam• **Chuyên khoa:** Khoa Cấp Cứu• **Thời gian:** 13:45• **Phòng:** Phòng 408    |
| **04** | `TC_04` (Ca muộn)       | `BS.pham_quoc_bao-KHOA_NHI_KHOA-15:00-PHONG_201`  | •**Bác sĩ:** BS. Phạm Quốc Bảo• **Chuyên khoa:** Khoa Nhi Khoa• **Thời gian:** 15:00• **Phòng:** Phòng 201   |

---

## 3. Nhật Ký Kết Quả Chạy Thực Tế (Console Output)

### Trường hợp 1 (`TC_01`):

```
=============================================
           BẢNG PHÂN CÔNG CA TRỰC
=============================================
Bác sĩ phụ trách : BS. Nguyễn Văn Hải
Chuyên khoa      : Khoa Tim Mạch
Thời gian khám   : 08:30
Vị trí làm việc  : Phòng 302
---------------------------------------------
```


### Trường hợp 2 (`TC_02`):

**Plaintext**

```
=============================================
           BẢNG PHÂN CÔNG CA TRỰC
=============================================
Bác sĩ phụ trách : BS. Trần Thị Mai
Chuyên khoa      : Khoa Nội Tiết
Thời gian khám   : 09:15
Vị trí làm việc  : Phòng 105
---------------------------------------------
```

### Trường hợp 3 (`TC_03`):

**Plaintext**

```
=============================================
           BẢNG PHÂN CÔNG CA TRỰC
=============================================
Bác sĩ phụ trách : BS. Lê Hoàng Nam
Chuyên khoa      : Khoa Cấp Cứu
Thời gian khám   : 13:45
Vị trí làm việc  : Phòng 408
---------------------------------------------
```

### Trường hợp 4 (`TC_04`):

**Plaintext**

```
=============================================
           BẢNG PHÂN CÔNG CA TRỰC
=============================================
Bác sĩ phụ trách : BS. Phạm Quốc Bảo
Chuyên khoa      : Khoa Nhi Khoa
Thời gian khám   : 15:00
Vị trí làm việc  : Phòng 201
---------------------------------------------
```
