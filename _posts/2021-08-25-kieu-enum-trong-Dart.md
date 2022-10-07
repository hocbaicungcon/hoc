---
layout: post
title: Kiểu enum trong Dart
subtitle: Giới thiệu về kiểu enum trong ngôn ngữ Dart
categories: dart
tags: [dart, flutter, enum]
---

## Kiểu enum là gì?

Kiểu liệt kê (enumeration) `enum` thường được sử dụng để lưu các giá trị hằng số theo tên gọi. Kiểu liệt kê được khai báo bằng cách sử dụng từ khóa `enum`

Chúng ta khai báo một `enum` có tên là `Months` để biểu diễn cho các tháng trong một năm

```dart
enum Months { january, february, march, april, may,
june, july, august, September, October, november,
december}
```

Lưu ý rằng phần khai báo kiểu `enum` phải nằm ngoài các hàm, kể cả hàm `main`

Lúc này, để truy cập đến một phần tử của `enum`, chúng ta dùng dấu `.` và phần tử đó, ví dụ `Months.june` hoặc thông qua phương thức `values[index]` chỉ số `index` của phần tử đó.

```dart
enum Months { january, february, march, april, may, june, july, august, september, october, november,  december }
void main() {
  print(Months.values[2]); //Kết quả Months.march
  print(Months.february); //Kết quả Months.february
}
```

## Tại sao cần sử dụng kiểu `enum`?

Kiểu liệt kê `enum` là một kiểu [`iterable`](https://o2.edu.vn/iterator-trong-dart-la-gi/), tức là cũng có thể duyệt tuần tự qua từng phần tử của nó.

```dart
enum HoaQua{ Apple, Pear, Grapes, Banana, Orange }
void main(){
    print(HoaQua.values); 
    HoaQua.values.forEach((v) => print('value: ' + v + 'index: ' + v.index));
}
```

Mỗi phần tử của một `enum` được gán với một con số, gọi là `index`, tương ứng với vị trí của phần tử đó trong `enum` bắt đầu từ số `0`.