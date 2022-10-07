---
layout: post
title: Biến và các kiểu dữ liệu trong Dart
subtitle: Cách khai báo biến và giới thiệu các kiểu dữ liệu cơ bản trong Dart 
categories: dart flutter
tags: [var, dynamic, dart, flutter, const, final]
---
## Biến là gì?

Biến `variable` được dùng để lưu các đối tượng khi ứng dụng hoạt động, ví dụ như lưu tên của người dùng, lưu tên và số sản phẩm người dùng đang chọn mua...

## Khởi tạo biến

Để khai báo (tạo) một biến, chúng ta sử dụng từ khoá chỉ kiểu của biến và theo sau là tên biến

```dart
String myName;
int myAge;
```

Hoặc thay kiểu của biến bằng từ khoá `var` và theo sau là tên biến

```dart
var myNname;
var myAge;
```

Lúc này, biến sẽ có kiểu là `dynamic` nếu không được gán giá trị khởi tạo. Nếu có giá trị khởi tạo thì biến sẽ nhận kiểu là kiểu của giá trị đó. 

Từ khoá `var` khai báo một biến mà không chỉ ra kiểu của biến. Nếu chúng ta gán giá trị khởi tạo luôn khi khai báo thì Dart sẽ tự xác định kiểu của biến, và sau đó chúng ta không thể thay đổi kiểu của biến được nữa. Còn nếu chúng ta không gán giá trị khởi tạo thì Dart sẽ xác định kiểu của biến là `dynamic`

```dart
void main() {
  var a; //a có kiểu dynamic
  a = 123;
  a = 'Phuong';
  
  var b = 123; //b có kiểu int, là kiểu của số 123
  b = 'Phuong'; //Lỗi ở đây vì kiểu int không thể nhận giá trị kiểu String
}
```

## Phép gán giá trị `=`

Để gán giá trị cho một biến, chúng ta sử dụng phép toán (toán tử - operator) `=` sau khi đã khai báo chúng.

```dart
myName = 'Phương';
myAge = 31;
```

Chúng ta cũng có thể vừa khai báo một biến vừa gán cho nó một giá trị khởi tạo

```dart
String name = 'Phương';
int age = 31;
```

Kể từ phiên bản 2.0 trở đi thì Dart yêu cầu `null-safety`, tức là bất cứ biến nào cũng cần được gán giá trị trước khi sử dụng, thay vì nhân giá trị mặc định `null` như các phiên bản trước. Do đó, chúng ta thường chọn cách gán giá trị khởi tạo ngay khi khai báo biến.

## Các kiểu dữ liệu xây dựng sẵn `built-in types` trong Dart

### Dữ liệu kiểu tĩnh (Static Types)

| Kiểu dữ liệu   | Mô tả                                                        |
| -------------- | ------------------------------------------------------------ |
| `int `         | Dùng biểu diễn các số nguyên như `1` hoặc `-98`              |
| `double`       | Biểu diễn các số thực như `3.14`                             |
| `bool`         | Kiểu logic (Boolean) chỉ có hai giá trị `true` và `false`    |
| `String`       | Kiểu xâu (chuỗi) kí tự `immutable` (không thay đổi). Ví dụ có biến `myName` kiểu `String` đang lưu giá trị `phuong` và ta muốn thay đổi thành `Phuong` thì không thể thực hiện phép gán `myName[0]=P` mà bắt buộc thay đổi toàn bộ giá trị của biến `myName='Phuong'` |
| `StringBuffer` | Kiểu xâu kí tự `mutable` (có thể thay đổi).                  |
| `RegExp`       | Kiểu biểu thức chính quy (Regular expressions)               |
| `List`         | Dùng để biểu diễn các danh sách (còn được gọi là mảng, array). Các phần tử của danh sách được đặt trong cặp ngoặc `[]` chẳng hạn `['cam', 'bưởi', 'mướp', 'dưa hấu']` |
| `Map`          | Dùng để biểu diễn các từ điển, mỗi phần tử của từ điển gồm có một cặp gọi là khoá `key` và giá trị `value` được đặt trong cặp ngoặc `{}`. Ví dụ `{'one' : 'một', 'two' : 'hai', 3 : 'ba'}` |
| `Set`          | Kiểu tập hợp, tương tự trong Toán học, mỗi phần tử của một tập hợp là duy nhất. Kiểu `set` cũng có các phép toán *hợp, giao, hiệu* tương tự như trong Toán học. |
| `DateTime`     | Dùng để biểu diễn các mốc thời gian (thời điểm)              |
| `Duration`     | Dùng biểu diễn một khoảng thời gian (thời lượng)             |
| `Uri`          | Uniform Resource Identifier                                  |
| `Error`        | Dùng để biểu thị các thông tin về lỗi                        |

### Dynamic Types

Từ khoá `dynamic` khai báo một biến với kiểu `dynamic` (kiểu động) giúp biến có thể chấp nhận mọi kiểu tĩnh (`static type` ở bảng trên).

## Hằng số `const`

Để biểu diễn một hằng số trong Dart, chúng ta sử dụng từ khoá `const` và theo sau là tên của hằng số đó, ví dụ

```dart
const pi = 3.1415;
const 
```

Các hằng số là những giá trị cố định không thay đổi trong toàn bộ chương trình từ khi soạn thảo và khi chương trình chạy.

## Biến `final`

Trong chương trình, có những biến chỉ được nhận giá trị một lần và không bao giờ thay đổi (chẳng hạn địa chỉ email của một người) thì chúng ta sử dụng từ khoá `final` và theo sau là kiểu của biến rồi đến tên biến.

```dart
final String email;
```

Sự khác nhau của `const` và `final` là, các hằng số `const` thì lập trình viên biết ngay khi lập trình và tồn tại trong suốt quá trình viết code cũng như chạy. Còn các biến `final` thì trong lúc viết code, lập trình viên chưa biết giá trị của nó là bao nhiêu, thường là khi chạy nó mới được nhận giá trị (một lần và không thể thay đổi trong suốt thời gian chương trình chạy). Nội dung này các bạn xem thêm các bài viết ở phần `class`

Nói cách khác, cả `const` và `final` đều dùng cho các hằng số, nhưng `const` là hằng số trong khi biên dịch *compile time*, còn final là hằng số trong khi chạy *run time*.
