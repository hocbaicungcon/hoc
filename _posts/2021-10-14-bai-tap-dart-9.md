---
layout: post
title: Số tự nhiên chia hết cho 7 nhưng không chia hết cho 5
subtitle: 
categories: dart
tags: [dart, flutter]
---

# Bài tập Dart - Số tự nhiên chia hết cho 7

Viết chương trình tìm tất cả các số chia hết cho `7` nhưng không phải bội số của `5`, nằm trong đoạn `10` và `200`. Các số thu được sẽ được in thành chuỗi trên một dòng, cách nhau bằng dấu phẩy.

```dart
import 'dart:io';

void main() {
  for(int i = 14; i<=200; i+= 7){
    if(i % 5 !=0) {
      stdout.write(i);
      stdout.write(',');
    }
  }
}
```
