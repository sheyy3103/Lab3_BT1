var myData: Array<any> = [
    { code:'B1234',name:"Hoàng Bá Hào",class: "A01",email:'hao@gmail.com',password:'123456', toan: 8, ly: 10, hoa:7},
    { code:'B1235',name:"Trần Ngọc Đào",class: "A04",mail:'kien@gmail.com',password:'123456', toan: 4,ly: 6,hoa:7},
    { code:'B1236',name: "Vũ Văn Kiên",class: "A02",email:'kien@gmail.com',password:'123456', toan: 4,ly: 6,hoa:7},
    { code:'B1237',name:"Lê Trung Tín",class: "B12",email: 'tintrung@gmail.com',password:'123456',toan: 6,ly: 5,hoa: 4 },
    { code:'B1238',name: "Đào Ngọc Hòa",class: "A04",email: 'hoadn@gmail.com', password: '123456',toan: 8, ly: 10, hoa:5},
    { code:'B1239',name:"Lê Văn Vinh",class: "B07",email: 'vinlv@gmail.com',password:'123456',toan: 5,ly: 7,hoa: 3 },
    { code:'B1240',name:"Đỗ Đức Hiếu",class: "A01",email: 'hieudd@gmail.com',password:'123456',toan: 8,ly: 10,hoa: 9 },
    { code:'B1241',name:"Tào Công Long",class: "B07",email: 'longtao@gmail.com',password:'123456',toan: 8,ly: 10,hoa:7},
    { code:'B1242',name:"Vũ Chí Bảo",class: "B12",email: 'baovc@gmail.com',password: '123456',toan: 8,ly: 10,hoa: 7 }
    ];
// Tạo hàm in danh sách mảng dữ liệu sinh viên lên bảng html để tái sử dụng như sau
// Khai báo hàm trả về mảng dữ liệu
function myDatas(): Array<any> {
    return [
    { code: 'B1234', name: "Hoàng Bá Hào",class: "A01", email: 'hao@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 7 },
    { code: 'B1235', name: "Trần Ngọc Đào",class: "A04", email: 'daongoc@gmail.com', password: '123456', toan: 5, ly: 7, hoa: 7 },
    { code: 'B1236', name: "Vũ Văn Kiên",class: "A02", email: 'kien@gmail.com', password: '123456', toan: 4, ly: 6, hoa: 7 },
    { code: 'B1237', name: "Lê Trung Tín",class: "B12", email: 'tintrung@gmail.com', password: '123456', toan: 6, ly: 5, hoa: 4 },
    { code: 'B1238', name: "Đào Ngọc Hòa",class: "A01", email: 'hoadn@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 5 },
    { code: 'B1239', name: "Lê Văn Vinh",class: "B07", email: 'vinlv@gmail.com', password: '123456', toan: 5, ly: 7, hoa: 3 },
    { code: 'B1240', name: "Đỗ Đức Hiếu",class: "A01", email: 'hieudd@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 9 },
    { code: 'B1241', name: "Tào Công Long",class: "B07", email: 'longtao@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 7 },
    { code: 'B1242', name: "Vũ Chí Bảo",class: "B12", email: 'baovc@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 7 }
    ];
    }
var showStudentList = function (data: any) {
    var _html = '';
    // duyệt mảng
    for (let std of data) {
    var tongDiem = std.toan + std.ly + std.hoa;
    let diemTB = tongDiem / 3; //làm tròn kết quả lên 1 dấu
    let xepLoai = '';
    if (diemTB > 5 && diemTB < 6.5) {
    xepLoai = 'Trung Bình';
    } else if (diemTB >= 6.5 && diemTB < 8) {
    xepLoai = 'Khá';
    } else if (diemTB >= 8 && diemTB < 9) {
    xepLoai = 'Giỏi';
    } else if (diemTB >= 9) {
    xepLoai = 'Xuất sắc';
    } else {
    xepLoai = 'Yếu kém';
    }
    _html += `<tr>
    <td>${std.code}</td>
    <td>${std.name}</td>
    <td>${std. class}</td>
    <td>${std.email}</td>
    <td>${std.toan}</td>
    <td>${std.ly}</td>
    <td>${std.hoa}</td>
    <td>${diemTB.toFixed(1)}</td>
    <td>${xepLoai}</td>
    </dtr> `;
    }
    var _bodyList: any = document.getElementById('tbody-list');
    _bodyList.innerHTML = _html;
    }
    // Gọi lại hàm
    let _myData = myDatas(); // gọi hàm để lấy dữ liệu và duyệt mảng
    showStudentList(myData);
    // truy cập các điều khiển tren form
var input_marks: any = document.getElementById('input_marks');
var btn_filter: any = document.getElementById('btn_filter_marks');

btn_filter.onclick = function () {
    let marks = input_marks.value;
    // kiemr tra xem đã nhập giá trị chưa
    if (marks == '') {
    alert('VUi lòng nhập điểm cần tìm');
    return;
    }
    // sử dụng hàm filter để lọc theo điều kiện
    let studentFIlters = myData.filter(function (obj) {
    var totalMarks = obj.toan + obj.ly + obj.hoa;
    let markAvg = totalMarks / 3; //làm tròn kết quả lên 1 dấu
    return markAvg >= marks;
    });
    showStudentList(studentFIlters); // gọi lại hàm in dữ liệ sau khi lọc kết qur
    }
    // khai báo hàm sort_markAvg kiể arrow function
var sort_markAvg = (sort_type: string) => {
    let myData = myDatas(); // load lại dữ liệu mỗi làn click
    if (sort_type == 'ASC') {
    let studenSort = myData.sort(function (a: any, b: any) {
    return a.toan < b.toan ? -1 : 0;
    });
    showStudentList(studenSort);
    } else if (sort_type == 'DESC') {
    let studenSort = myData.sort(function (a: any, b: any) {
    return a.toan > b.toan ? -1 : 0;
    });
    showStudentList(studenSort);
    } else {
    // Gọi lại hàm
    showStudentList(myData);
    }
    }
var input_class: any = document.getElementById("input_class");
    var btn_filter_class: any = document.getElementById("btn_filter_class");
    btn_filter_class.onclick = function () {
    let classes = input_class.value;
    // kiemr tra xem đã nhập giá trị chưa
    if (classes == "") {
        alert("VUi lòng nhập lớp cần tìm");
        return;
    }
    // sử dụng hàm filter để lọc theo điều kiện
    let studentFIlters = myData.filter(function (obj) {
        return classes == obj.class;
    });
    showStudentList(studentFIlters);
};


    var _bodyList: any = document.getElementById('tbody-list');
    _bodyList.innerHTML;