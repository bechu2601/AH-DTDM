function khoiTaoMang2ChieuNgauNhien(rows, cols, minValue, maxValue) {
    var newArray = [];
  
    for (var i = 0; i < rows; i++) {
      var row = [];
  
        for (var j = 0; j < cols; j++) {
        // Tạo giá trị ngẫu nhiên trong khoảng [minValue, maxValue]
        var randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        
        // Gán giá trị ngẫu nhiên cho mỗi phần tử
        row.push(randomValue);
      }
  
      newArray.push(row);
    }
  
    return newArray;
  }


var res  = khoiTaoMang2ChieuNgauNhien(3, 4, 10, 99);
console.log(res);


const resMang1 = res.map(row => row.map(value => value * 2));
console.log(resMang1)


function khoiTaoMang1ChieuNgauNhien(rows, minValue, maxValue){
  var row = []
  for(i = 0; i < rows; i++){
    var randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    row.push(randomValue);
  }
  return row;
}

var kq = khoiTaoMang1ChieuNgauNhien(5, 1, 10);
console.log(kq);

var kqMang = kq.map(kq => kq * kq);
console.log(kqMang);