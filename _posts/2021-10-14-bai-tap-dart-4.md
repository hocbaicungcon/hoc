---
layout: post
title: Số nguyên dương lẻ nhỏ hơn 100
subtitle: 
categories: dart
tags: [dart, flutter]
---

# Bài tập Dart - Số nguyên dương lẻ nhỏ hơn 100

Viết chương trình in ra tất cả các số lẻ nhỏ hơn `100` trừ các số `5`, `7`, `93`.

```dart
void main() {
  for (int i = 0; i < 100; i++) {
    if ((i % 2 == 1) && (i!=5) && (i!=7) && (i !=93)) print(i);
  }
}
```

