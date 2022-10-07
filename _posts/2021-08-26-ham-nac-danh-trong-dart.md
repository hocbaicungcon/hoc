---
layout: post
title: Hàm nặc danh trong Dart (Anonymous functions)
subtitle: 
categories: dart flutter
tags: [anonymous, closure, lambda, function, dart, flutter]
---

## Thế nào là hàm nặc danh?

Hàm nặc danh (hàm ẩn danh - anonymous function) là những hàm không có tên. Một hàm nặc danh trong Dart cũng tương tự như một hàm có tên, nhận vào các tham số và thực hiện những lệnh nhất định, có thể trả về kết quả hoặc không.

## Cú pháp của hàm nặc danh trong Dart

```
(danh sách các tham số){
	các câu lệnh;
}
```

## Ví dụ về hàm nặc danh trong Dart

```dart
void main() {
  var hoaQua = ["Táo", "Cam", "Bưởi", "Dưa hấu"];
  hoaQua.forEach((item) {
    print('${hoaQua.indexOf(item)} : $item');
  });
}
```

Kết quả của chương trình trên:

![image-20210826104208043](https://divin.dev/assets/images/image-20210826104208043.png)

Chúng ta có thể gán một hàm nặc danh cho các hằng số hoặc biến, sau này chúng ta có thể truy cập đến hàm đó hoặc lấy giá trị của chúng bằng cách sử dụng tên biến số, hằng số đó đóng vai trò như tên của hàm.

```dart
void main() {
  var sum = (a, b) => a + b;
  print(sum(3, 5)); //Kết quả 8
}
```

Một ví dụ khác nữa của hàm nặc danh

```dart
Function applyMultiplier(num multiplier) {
  return (num value) => value * multiplier;
}

var triple = applyMultiplier(3);

void main() {
  print(triple); //Kết quả Closure 'applyMultiplier_closure'
  print(triple(15)); //Kết quả 45
}
```

Tiếp một ví dụ nữa

```dart
Function add_number(num number) {
  return (num i) => number + i;
}
  
void main() {
  // Tạo một hàm cộng thêm 2.
  var divindev1 = add_number(2);
  
  // Tạo một hàm cộng thêm 4.
  var divindev1 = add_number(4);
  
  print(divindev1(10)); //Kết quả 12
  print(divindev2(10)); //Kết quả 14
}
```
