---
layout: post
title: Số nguyên chẵn hay lẻ?
subtitle: 
categories: dart
tags: [dart, flutter]
---

# Bài tập Dart - Số nguyên chẵn hay lẻ?

Viết chương trình hỏi người dùng nhập vào một số nguyên. In ra màn hình số nguyên đó là số chẵn hay lẻ.

```dart
import 'dart:io';

void main() {
    stdout.write("Mời bạn nhập một số nguyên: ");
    int n = int.parse(stdin.readLineSync()!);
 
  if (n % 2 == 0)
    print('Số bạn nhập vào là số chẵn.');
  else
    print('Số bạn nhập vào là số lẻ.');
}
```

