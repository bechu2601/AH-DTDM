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


var res  = khoiTaoMang2ChieuNgauNhien(3, 3, 0, 30);
console.log(res);