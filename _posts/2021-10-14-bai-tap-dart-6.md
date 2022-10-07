---
layout: post
title: Kiểm tra hai số cùng dấu hay trái dấu
subtitle: 
categories: dart
tags: [dart, flutter]
---

# Bài tập Dart - Cùng dấu hay trái dấu

Viết chương trình kiểm tra xem hai số thực `a b` cho trước có cùng dấu hay không.

```dart
import 'dart:io';

void main() {    
    stdout.write("Mời nhập số thứ nhất:");
    double a = double.parse(stdin.readLineSync()!);
    stdout.write("Mời nhập số thứ hai:");
    double b = double.parse(stdin.readLineSync()!);
  
  if (a * b > 0)
    print('Hai số bạn nhập vào cùng dấu.');
  else
    print('Hai số bạn nhập vào trái dấu.');
}
```
