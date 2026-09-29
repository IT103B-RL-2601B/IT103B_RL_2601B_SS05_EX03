// Dữ liệu đầu vào
const rawRecord = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

// 1. Tách chuỗi thành các trường độc lập bằng dấu '-'
const parts = rawRecord.split("-");
const rawDoctor = parts[0];     // "BS.nguyen_van_hai"
const rawDepartment = parts[1]; // "KHOA_TIM_MACH"
const rawTime = parts[2];       // "08:30"
const rawRoom = parts[3];       // "PHONG_302"

// 2. Chuẩn hóa tên Bác sĩ:
// Bỏ tiền tố "BS." và tách các từ theo dấu '_'
const doctorParts = rawDoctor.replace("BS.", "").split("_");

// Viết hoa chữ cái đầu từng từ (Họ - Đệm - Tên)
const ho = doctorParts[0].slice(0, 1).toUpperCase() + doctorParts[0].slice(1).toLowerCase();
const dem = doctorParts[1].slice(0, 1).toUpperCase() + doctorParts[1].slice(1).toLowerCase();
const ten = doctorParts[2].slice(0, 1).toUpperCase() + doctorParts[2].slice(1).toLowerCase();
const cleanDoctorName = ho + " " + dem + " " + ten;

// 3. Chuẩn hóa Chuyên khoa:
// Đổi dấu '_' thành dấu cách và viết hoa chữ cái đầu
const deptParts = rawDepartment.split("_");
const tuKhoa = deptParts[0].slice(0, 1).toUpperCase() + deptParts[0].slice(1).toLowerCase();
const tuTim = deptParts[1].slice(0, 1).toUpperCase() + deptParts[1].slice(1).toLowerCase();
const tuMach = deptParts[2].slice(0, 1).toUpperCase() + deptParts[2].slice(1).toLowerCase();
const cleanDepartment = tuKhoa + " " + tuTim + " " + tuMach;

// 4. Chuẩn hóa Phòng khám: "PHONG_302" -> "Phòng 302"
const cleanRoom = rawRoom.replace("PHONG_", "Phòng ");

// 5. In bảng thông báo phân công ca khám ra Console bằng Template Literals
console.log(`
=============================================
           BẢNG PHÂN CÔNG CA TRỰC
=============================================
Bác sĩ phụ trách : BS. ${cleanDoctorName}
Chuyên khoa      : ${cleanDepartment}
Thời gian khám   : ${rawTime}
Vị trí làm việc  : ${cleanRoom}
---------------------------------------------
`);