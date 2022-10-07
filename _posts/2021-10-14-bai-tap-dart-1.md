---
layout: post
title: Tính số năm mừng thọ 100 tuổi
subtitle: 
categories: dart
tags: [dart, flutter]
---

# Bài tập Dart - Nhập tên tuổi

Viết chương trình hỏi người dùng họ tên và tuổi (là một số nguyên). Tính và in ra màn hình còn bao nhiêu năm nữa thì người đó mừng thọ 100 tuổi :)

```dart
import 'dart:io';

void main() {    
    stdout.write("Tên bạn là gì?");
    String name = stdin.readLineSync()!;

    print("Xin chào, $name! Bạn bao nhiêu tuổi?");
    int age = int.parse(stdin.readLineSync()!);

    int yearsToHunderd = 100 - age;
    print("$name, Bạn còn $yearsToHunderd năm nữa là Mừng thọ 100 tuổi!");
}
```

