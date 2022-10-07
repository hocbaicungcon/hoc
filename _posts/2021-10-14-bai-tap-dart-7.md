---
layout: post
title: Đọc số tự nhiên
subtitle: 
categories: dart
tags: [dart, flutter]
---

# Bài tập Dart - Đọc số tự nhiên

Viết chương trình in ra cách đọc của một số tự nhiên `n` cho trước có ba chữ số. Ví dụ với `n=123` thì kết quả in ra màn hình là `Một trăm hai mươi ba`

Dưới đây, chúng tôi gợi ý bạn sử dụng từ khóa `switch case` để giải quyết. Nếu sử dụng kiểu dữ liệu `List` hoặc `Map` thì chương trình sẽ gọn hơn rất nhiều.

```dart
import 'dart:io';

void main() {
  print('Mời bạn nhập một số nguyên dương: ');
  int n = int.parse(stdin.readLineSync()!);
  String hang_tram = '';
  String hang_chuc = '';
  String hang_don_vi = '';
  int a = n ~/ 100;
  int b = (n - 100 * a) ~/ 10;
  int c = n % 10;
  switch (a) {
    case 0:
      hang_tram = 'Không';
      break;
    case 1:
      hang_tram = 'Một';
      break;
    case 2:
      hang_tram = 'Hai';
      break;
    case 3:
      hang_tram = 'Ba';
      break;
    case 4:
      hang_tram = 'Bốn';
      break;
    case 5:
      hang_tram = 'Năm';
      break;
    case 6:
      hang_tram = 'Sáu';
      break;
    case 7:
      hang_tram = 'Bảy';
      break;
    case 8:
      hang_tram = 'Tám';
      break;
    case 9:
      hang_tram = 'Chín';
      break;
  }
  switch (b) {
    case 0:
      hang_chuc = 'linh';
      break;
    case 1:
      hang_chuc = 'mười';
      break;
    case 2:
      hang_chuc = 'hai';
      break;
    case 3:
      hang_chuc = 'ba';
      break;
    case 4:
      hang_chuc = 'bốn';
      break;
    case 5:
      hang_chuc = 'năm';
      break;
    case 6:
      hang_chuc = 'sáu';
      break;
    case 7:
      hang_chuc = 'bảy';
      break;
    case 8:
      hang_chuc = 'tám';
      break;
    case 9:
      hang_chuc = 'chín';
      break;
  }

  switch (c) {
    case 0:
      hang_don_vi = '';
      break;
    case 1:
      hang_don_vi = 'một';
      break;
    case 2:
      hang_don_vi = 'hai';
      break;
    case 3:
      hang_don_vi = 'ba';
      break;
    case 4:
      hang_don_vi = 'bốn';
      break;
    case 5:
      hang_don_vi = 'năm';
      break;
    case 6:
      hang_don_vi = 'sáu';
      break;
    case 7:
      hang_don_vi = 'bảy';
      break;
    case 8:
      hang_don_vi = 'tám';
      break;
    case 9:
      hang_don_vi = 'chín';
      break;
  }
  if (b > 1) {
    print('$hang_tram trăm $hang_chuc mươi $hang_don_vi');
  } else {
    print('$hang_tram trăm $hang_chuc $hang_don_vi');
  }
}
```

Nếu sử dụng kiểu danh sách, chương trình sẽ như sau:

```dart
import 'dart:io';

void main() {
  print('Mời bạn nhập một số nguyên dương: ');
  int n = int.parse(stdin.readLineSync()!);
  List<String> chu_thuong = [
    'không',
    'một',
    'hai',
    'ba',
    'bốn',
    'năm',
    'sáu',
    'bảy',
    'tám',
    'chín'
  ];
  List<String> chu_hoa = [
    'Không',
    'Một',
    'Hai',
    'Ba',
    'Bốn',
    'Năm',
    'Sáu',
    'Bảy',
    'Tám',
    'Chín'
  ];
 if(n%10 !=0){print(
      '${chu_hoa[n~/100]} trăm ${chu_thuong[(n - (n ~/ 100) * 100) ~/ 10]} mươi ${chu_thuong[n % 10]}.');
}
  else{
    print(
      '${chu_hoa[n~/100]} trăm ${chu_thuong[(n - (n ~/ 100) * 100) ~/ 10]} mươi.');

  }
}
```

