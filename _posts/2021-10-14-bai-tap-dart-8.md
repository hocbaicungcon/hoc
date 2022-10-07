---
layout: post
title: Đoán số tự nhiên
subtitle: 
categories: dart
tags: [dart, flutter]
---

# Bài tập Dart - Đoán số tự nhiên

Viết chương trình sinh ra một số tự nhiên `n` ngẫu nhiên từ `1` đến `100`. Đề nghị người dùng đoán một số và nhập vào. In ra màn hình thông báo xem số người dùng đoán đúng, lớn hơn hay nhỏ hơn số `n`. Nếu chưa đúng thì cho phép người dùng đoán lại hai lần nữa.

```dart
import 'dart:io';
import 'dart:math';

void main() {
  final random = Random();
  int n = random.nextInt(100);
  int so_lan_doan = 0;

  while (so_lan_doan < 3) {
    stdout.write('Mời bạn đoán một số:');
    int so_du_doan = int.parse(stdin.readLineSync()!);
    so_lan_doan++;
    if (so_du_doan == n) {
      print('Chúc mừng! Bạn đoán chính xác!');
      break;
    } else if (so_du_doan < n) {
      print('Số bạn đoán nhỏ hơn số của chương trình!');
    } else {
      print('Số bạn đoán lớn hơn số của chương trình!');
    }
  }
  if (so_lan_doan == 3) print('Bạn đã thua cuộc!');
}
```
