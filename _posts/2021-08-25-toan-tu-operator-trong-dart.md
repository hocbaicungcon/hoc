---

layout: post
title: Các toán tử trong Dart (Operators in Dart)
subtitle: Giới thiệu về các toán tử (phép toán - operator) trong ngôn ngữ Dart
categories: dart
tags: [dart, flutter, operators]
---

## Biểu thức là gì?

Biểu thức là một loại câu lệnh đặc biệt đánh giá một giá trị. Mọi biểu thức đều bao gồm:

- **Toán hạng** `operand`- đại diện cho dữ liệu (các biến số, hằng số, giá trị)
- **Toán tử** `operator` - dùng để xác định cách mà các toán hạng sẽ được xử lý để trả về giá trị.

Ví dụ, chúng ta xét biểu thức sau

```dart
2 + 3 - n;
```

Trong biểu thức này, `2` , `3` và `5` là các **toán hạng** còn ký hiệu `+` (cộng) và `-` là các **toán tử**.

## Các loại toán tử trong Dart

Trong Dart có các loại toán tử sau

- Toán tử số học (Arithmetic Operators)

- Các toán tử so sánh và quan hệ (Equality and Relational Operators)
- Kiểm tra kiểu (Type test Operators)
- Toán tử Bitwise (Bitwise Operators)
- Toán tử gán giá trị (Assignment Operators)
- Toán tử logic (Logical Operators)

### Toán tử số học

| Toán tử |                           Ý nghĩa                            |
| :-----: | :----------------------------------------------------------: |
|   `+`   |        Toán tử cộng, ví dụ `17 + 3` cho kết quả `20`         |
|   `-`   |        Toán tử trừ, ví dụ `17 - 3` cho kết quả `14`.         |
|   `*`   |       Toán tử nhân, , ví dụ `17 * 3` cho kết quả `51`        |
|   `/`   | Toán tử chia, , ví dụ `17 / 3` cho kết quả `5.666666666666667` |
|  `~/`   |    Chia lấy phần nguyên, ví dụ `17 ~/ 3` cho kết quả `5`     |
|   `%`   |       Chia lấy phần dư, ví dụ `17 % 3` cho kết quả `2`       |
|  `++`   | Toán tử tăng thêm một đơn vị, ví dụ `17++` cho kết quả `18`  |
|  `--`   |  Toán tử giảm đi một đơn vị, ví dụ `17--` cho kết quả `16`   |

### Các toán tử so sánh

Toán tử so sánh kiểm tra hoặc xác định loại mối quan hệ giữa hai đối tượng. Các toán tử quan hệ trả về một giá trị Boolean tức là `true` hoặc `false`.

Ở các ví dụ dưới đây, giả sử giá trị của A là `5` và `B`là `20`.

| Toán tử |      Ý nghĩa      |         Ví dụ         |
| :-----: | :---------------: | :-------------------: |
|   `>`   |      Lớn hơn      | `(A > B)`  là `false` |
|   `<`   |      Nhỏ hơn      |  `(A < B)` là `true`  |
|  `>=`   | Lớn hơn hoặc bằng | `(A >= B)` là `false` |
|  `<=`   | Nhỏ hơn hoặc bằng | `(A <= B)` là `true`  |
|  `==`   |     Bằng nhau     | `(A == B)` là `false` |
|  `!=`   |  Không bằng nhau  | `(A! = B)` là `true`  |

### Toán tử kiểm tra kiểu

Các toán tử này rất tiện lợi để kiểm tra các loại trong thời gian chạy.

| Toán tử |                        Ýnghĩa                         |              Ví dụ              |
| :-----: | :---------------------------------------------------: | :-----------------------------: |
|  `is`   | Trả về `true` nếu nếu đối tượng có kiểu được chỉ định |    `5 is int` trả về `true`     |
|  `is!`  |  Trả về `false` nếu đối tượng có kiểu được chỉ định   | `'5' is! String` trả về `false` |

### Toán tử Bitwise

Bảng sau liệt kê các toán tử bitwise có sẵn trong Dart và vai trò của chúng:

| Toán tử  |                           Ý nghĩa                            |
| :------: | :----------------------------------------------------------: |
| `a & b`  | Trả về `1` ở mỗi vị trí mà các bit tương ứng của cả hai toán hạng là `1`. |
| `a | b ` | Trả về `1` ở mỗi vị trí mà các bit tương ứng của một trong hai toán hạng là `1`. |
| `a ^ b`  | Trả về `1` ở mỗi vị trí mà các bit tương ứng của một trong hai nhưng không phải cả hai toán hạng đều là `1`. |
|  `~ a`   |               Đảo ngược các bit của toán hạng.               |
|  `a<<b`  | Dịch chuyển `a` trong biểu diễn nhị phân sang bên trái `b` bit (`b<32`), dịch chuyển theo số `0` từ bên phải. |
|  `a>>b`  | Dịch chuyển `a` trong biểu diễn nhị phân sang phải `b` bit (`b<32`), loại bỏ các bit bị dịch chuyển. |

Để chuyển một số nguyên `a` ở hệ thập phân sang hệ nhị phân, chúng ta dùng hàm `a.toRadixString(2)`. Bạn có thể thay số 2 bằng các cơ số khác như `8` hoặc `16`.

```dart
void main() {
  int a = 318;
  int b = 459;
//   Viết a dưới dạng nhị phân
  print(a.toRadixString(2)); //Kết quả 100111110
//   Viết b dưới dạng nhị phân
  print(b.toRadixString(2)); //Kết quả 111001011
  print((a & b).toRadixString(2)); //Kết quả 100001010
  print((a | b).toRadixString(2)); //Kết quả 111111111
  print((a ^ b).toRadixString(2)); //Kết quả 11110101
  print((~a).toRadixString(2)); //Kết quả 11111111111111111111111011000001
  print((a << 3).toRadixString(2)); //Kết quả 100111110000
  print((a >> 4).toRadixString(2)); //Kết quả 10011
}
```

Các phép tính **bitwise** được hỗ trợ trực tiếp bởi bộ xử lý (processor) của máy tính nên nó thực hiện rất nhanh. 

### Toán tử gán giá trị

| Toán tử |                           Ý nghĩa                            | Ví dụ                                       |
| :-----: | :----------------------------------------------------------: | ------------------------------------------- |
|   `=`   |  Gán giá trị từ toán hạng bên phải cho toán hạng bên trái.   | `C = A + B` gán giá trị của `A + B` vào `C` |
|  `??=`  |           Chỉ gán giá trị nếu biến đang là `null`            |                                             |
|  `+=`   | Thêm toán hạng bên phải vào toán hạng bên trái và gán kết quả cho toán hạng bên trái. | `C += A` tương đương với `C = C + A`        |
|  `-=`   | Trừ toán hạng bên phải khỏi toán hạng bên trái và gán kết quả cho toán hạng bên trái. | `C -= A` tương đương với `C = C - A`        |
|  `*=`   | Nhân toán hạng bên phải với toán hạng bên trái và gán kết quả cho toán hạng bên trái. | `C *= A` tương đương với `C = C*A`          |
|  `/=`   | Chia toán hạng bên trái với toán hạng bên phải và gán kết quả cho toán hạng bên trái. | `C /= A` tương đương với `C = C/A`          |

### Toán tử logic

Toán tử logic được sử dụng để kết hợp hai hoặc nhiều điều kiện. Các toán tử logic trả về một giá trị Boolean. Giả sử giá trị của biến A là `10` và `B` là `20`.

| Toán tử |                           Ý nghĩa                            |            Ví dụ            |
| :-----: | :----------------------------------------------------------: | :-------------------------: |
|  `&&`   | Toán tử `AND` (và) chỉ trả về `true` nếu tất cả các biểu thức là `true` | `(A>10 && B>10)` là `false` |
|  `||`   | Toán tử `OR` (hoặc) trả về `true` nếu ít nhất một trong các biểu thức là `true` | `(A>10 || B>10)` là `true`  |
|   `!`   | Toán tử `NOT` (phủ định) trả về giá trị ngược lại của biểu thức. |     `!(A>50)` là `true`     |

![toan tu bool trong Python Boolean trong Dart](https://divin.dev/assets/images/toan-tu-bool-trong-Dart.png)

## Biểu thức có điều kiện

### (điều kiện) ? expr1 : expr2

Nếu **điều kiện** là đúng, thì nó thực hiện và trả về kết quả của biểu thức **expr1**, **điều kiện** sai thì nó thực hiện và trả về giá trị của biểu thức **expr2**.

```dart
void main() { 
   var a = 10; 
   var result = (a > 12) ? "gia tri lon hon 12" : "gia tri nho hon hoac bang 12"; 
   print(result); 
} 
```

Ta thu được kết quả sau:

```dart
gia tri nho hon hoac bang 12
```

### expr1 ?? expr2

Nếu biểu thức **expr1** khác `null` thì trả về giá trị của nó; ngược lại thì thực hiện và trả về giá trị của biểu thức **expr2**

```
void main() { 
   var a = null; 
   var b = 12; 
   var result = a ?? b; 
   print(result); 
}
```

Ta thu được kết quả sau:

```dart
12
```