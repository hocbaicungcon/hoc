---
layout: post
title: Sự khác nhau giữa Function() và Function trong Dart?
subtitle: Sự khác nhau giữa hai cách khai báo Function() và Function trong ngôn ngữ lập trình Dart
categories: dart flutter
tags: [function, dart, flutter]
---

Khi khai báo một hàm `function` (thường gặp nhất là khi khai báo hàm của một `class`) trong Dart, chúng ta thường gặp hai cách khai báo sau:

```dart
Function first;
Function() second;
```

## Đâu là sự khác nhau giữa `Function()` và `Function` trong Dart?

- `Function` biểu diễn cho bất kì hàm`function` nào. Chẳng hạn chúng ta có hai hàm `foo` và `bar` như sau:

```dart
void foo() {}
int bar(int positional, {String? named}) => positional;
```

Và một biến `example` có kiểu là `Function`. Bây giờ, chúng ta thử gán các biến cho các hàm này

```dart
void main() {
  void foo() {}
  int bar(int positional, {String? named}) => positional;

  Function example = foo; // OK
  example = bar; // OK
}
```

- `Function()` biểu diễn một hàm `function` không có tham số. Vẫn với hai hàm `foo` và `bar` như trên, chúng ta thử gán cho biến `example` có kiểu là `Function()`.

```dart
void main() {
  void foo() {}
  int bar(int positional, {String? named}) => positional;

  Function() example = foo; // OK
  example = bar; // Err
}
```

Khi khai báo các hàm và gán giá trị cho biến hàm, chúng ta cần chú ý chúng phải có sự tương thích về tham số.

```dart
void main() {
  void foo() {}
  int bar(int a) {
    return a;
  };

  int Function(int) example;
  int Function(String) anotherExample;

  example = foo; // Erros, foo không có tham số trong khi example có tham số
  example = bar; // OK
  anotherExample =  bar; //Err
}
```

## Một ví dụ khác về `Function()` và `Function` trong Dart

Chúng ta có phương thức `callMe()` không có tham số, được gọi bởi một nút bấm `ElevatedButton`

```dart
 void callMe() {
    print('OK');
  }
```

`ElevatedButton` có mã nguồn như sau:

```
ElevatedButton(
        onPressed: callMe, // its working even if we called another method from here
        child: Text('Pressed Me'),
      ),
```

Nếu hàm `callMe()` có tham số 

```dart
void callMe(int a) {
        print('$a');
      }
```

thì nó sẽ không thể callback theo cách trên, mà phải sử dụng cách sau:

```dart
RaisedButton(
        onPressed: () {
          callMe(3); 
        },
        child: Text('Pressed Me'),
      ),
```

