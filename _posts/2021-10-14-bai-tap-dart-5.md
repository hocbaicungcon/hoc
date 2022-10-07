---
layout: post
title: Số lớn nhất trong ba số
subtitle: 
categories: dart
tags: [dart, flutter]
---

# Bài tập Dart - Tìm số lớn nhất

Viết chương trình tìm số lớn nhất trong ba số thực `a, b, c`.

**Cách 1.** Chúng ta lần lượt đi so sánh giá trị max với từng số.

```dart
void main() {
  double a = 3.14, b = -5, c = 27;
  double max = a;
  if (max < b) max = b;
  if (max < c) max = c;
  print(max);
}
```

**Cách 2.** Sử dụng toán tử điều kiện.

```dart
void main() {
  double a = 3.14, b = -5, c = 27;
  print(((a>b)?a:b)>c?(a>b)?a:b:c);  
}
```

**Cách 3.** Không sử dụng toán tử so sánh.

```dart
void main() {
  double a = 3.14, b = -5, c = 27;
  double max = (a + b + (a - b).abs()) / 2;
  print((max + c + (max - c).abs()) / 2);
}
```

