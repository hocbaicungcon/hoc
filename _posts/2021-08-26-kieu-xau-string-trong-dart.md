---
layout: post
title: Kiểu xâu String trong Dart/Flutter
subtitle: Hướng dẫn cách khai báo và sử dụng kiểu xâu (kiểu chuỗi) String trong Dart/FLutter. Các hàm, phương thức thông dụng như tách xâu, tìm xâu con, thay thế xâu con
categories: dart flutter
tags: [String, dart, flutter]
---

## Kiểu xâu String trong Dart là gì?

Kiểu `String` trong Dart được sử dụng để biểu diễn chuỗi ký tự Unicode(UTF-16) (bạn có thể sử dụng các xâu có kí tự tiếng Việt hoặc bất cứ thứ tiếng nào mà sử dụng được với mã Unicode).

Để khai báo/sử dụng một xâu (từ giờ chúng tôi sẽ gọi trực tiếp là `String)` chúng ta sử dụng cách khai báo như trong bài [Biến và các kiểu dữ liệu trong Dart](https://o2.edu.vn/bien-va-cac-kieu-du-lieu-trong-dart/), và đặt `String` đó trong cặp dấu nháy đơn `'` hoặc cặp dấu nháy kép `"`

Ví dụ `'Phan Văn Phương'` hoặc `"là người đẹp trai nhất thế giới"`

> Theo gợi ý của Visual Studio Code, thì chúng ta nên sử dụng cặp dấu nháy đơn `'` để bao nội dung của một `String`.

Nếu của `String` của bạn gồm nhiều dòng, có thể đặt chúng trong cặp nháy tam `'''`(gồm 3 dấu nháy đơn `'`) hoặc `"""` (gồm 3 dấu nháy kép `"`), ví dụ:

```dart
xau1 = '''đây là một String
nằm 
trên
nhiều dòng''';

xau2 = """mùa xuân sang có hoa anh đào
blah blah...
tôi là một con gà""";
```

## Truy cập đến từng kí tự của String

Các kí tự của một `String` đều được đánh chỉ số từ `0` cho đến `n-1`, với `n` là độ dài của `String`, `n` được truy cập qua thuộc tính `length`

```dart
void main() {
  String viDu = 'abcdef';
  print(viDu.length); //kết quả 6
  print(viDu[2]); //kết quả 'c'
  print(viDu[0]); //kết quả 'a'
}
```

Kiểu `String` là một kiểu dữ liệu `immutable`, tức là kiểu dữ liệu không thể thay đổi. Do đó, các phép gán làm thay đổi nội dung của `String` đều không hợp lệ. Chẳng hạn với xâu `viDu` ở trên, nếu bạn cố tình gán `viDu[2] = '3'` thì Dart sẽ báo lỗi. Vậy nếu muốn thay đổi kí tự đó thì chỉ có cách là gán lại giá trị cho toàn bộ xâu.

```dart
void main() {
  String viDu = 'abcdef';
  print(viDu.length); //kết quả 6
  viDu[2] = '3'; //lỗi
  viDu = 'ab3def';
  print(viDu); //kết quả 'ab3def'
}
```

Tuy nhiên, bạn có thể sử dụng nhiều phương thức (`method`) trên một `String` như nối, tách, cắt khoảng trống... của một `String`, vì khi đó thực ra `String` ban đầu không thay đổi mà kết quả của các phương thức này được gán vào một `String` mới!

```dart
void main() {
  String viDu = '  ab  cdef    ';
  viDu.trim();
  print(viDu); //kết quả vẫn là '  ab  cdef    '
  print(viDu.trim());//kết quả 'ab  cdef', đã được cắt khoảng trống nhưng kết quả này k được gán cho viDu
}
```

## Các kí tự đặc biệt của một String

- Để viết một kí tự nháy đơn `'` bạn có thể bao trong một `String` sử dụng cặp ngoặc nháy kép `"` và ngược lại, ví dụ

```
void main() {  
  print("đây là dấu nháy đơn ' này");
  print('còn đây là dấu nháy kép "');
}
```

- Hoặc sử dụng kí tự thoát `\` (string escape) cùng với các dấu nháy đó, cách này có thể sử dụng cho cả các kí tự đặc biệt khác khác như `\` hoặc `$`

```dart
void main() {
  print('in các kí tự ~!@#%^&*() dễ oẹt');	//in các kí tự ~!@#%^&*() dễ oẹt
  print('các kí tự đặc biệt: \' \$ \\');	//các kí tự đặc biệt: ' $ \
  print('còn đây là kí tự xuống \n dòng');
}
```

- Kí tự xuống dòng `\n`
- Kí tự tab `\t`
- Kí tự xóa kí tự liền trước `\b`
- Kí tự trở về đầu của xâu `\r`

```dart
void main() {
  print('nu na nu nống\n cái cống nằm trong\ncon ong nằm ngoài\b\b\b\rủ khoai chấm\tmật');
}
```

Khi chạy chương trình, chúng ta thu được kết quả như sau:

![kiểu xâu string trong dart flutter](https://o2.edu.vn/wp-content/uploads/2021/03/kieu-string-trong-dart.jpg)

## Nội suy chuỗi (String Interpolation)

Sử dụng kí tự `$` để nội suy nội dung của một xâu.

```dart
void main() {
  int a = 5;
  int b = 7;

  String ketQua = "Tổng của $a và $b là ${a + b}";
  print(ketQua); //Tổng của 5 và 7 là 12
}
```

## Các thuộc tính và phương thức của kiểu xâu String trong Dart

### Các thuộc tính của kiểu xâu String trong Dart

- `length` cho độ dài của một `String`
- `isEmpty` kiểm tra xem một String có là xâu rỗng hay không
- `isNotEmpty` kiểm tra xem một String có khác xâu rỗng hay không

```dart
void main() {
  String viDu = 'Phuong';
  print(viDu.length); //kết quả 6
  print(viDu.isEmpty); //kết quả false
  print(viDu.isNotEmpty); //kết quả true
}
```

### Các phương thức của kiểu `String` trong Dart

Lưu ý rằng kiểu xâu `String` trong Dart là `immutable`, nên các phương thức đều trả về một xâu mới, còn xâu ban đầu thì không hề thay đổi.

#### Lấy xâu con trong Dart

Sử dụng phương thức `subString(i,j)` để lấy ra một xâu con từ chỉ số `i` tới chỉ số `j-1` của xâu đã cho.

```dart
void main() {
  String xauMe = 'abcdefgh';
  String xauCon = xauMe.substring(2,5);
  print(xauCon);//kết quả 'cde'
}
```

#### Kiểm tra xâu có chứa một xâu con

Sử dụng phương thức `s.contains(c,[int startIndex = 0])` để kiểm tra xem xâu `s` có chứa xâu con `c` hay không, tính từ vị trí `startIndex`. Nếu không cung cấp tham số `startIndex`  thì nó nhận giá trị mặc định là `0` , tức là tìm kiếm từ đầu của xâu ban đầu. Kết quả trả về là kiểu `bool`. Bạn cũng có thể sử dụng biểu thức chính quy `RegExp` cho xâu con `c`.

```dart
void main() {
  String viDu = 'Mua dong cua anh';
  print(viDu.contains('dong')); //kết quả true
  print(viDu.contains('dong', 5)); //kết quả false
  print(viDu.contains(RegExp(r'[A-Z]'))); //kết quả true
}
```

#### Lấy vị trí đầu tiên của xâu con

Sử dụng phương thức `s.indexOf(c,[int start = 0])` để lấy vị trí đầu tiên của xâu con `c` trong xâu `s`. Kết quả trả về là số nguyên chỉ vị trí đầu tiên tìm thấy xâu con, nếu không tìm thấy thì trả về `-1`.

```dart
void main() {
  String viDu = 'Mua dong cua anh';
  print(viDu.indexOf('dong')); //kết quả 4
  print(viDu.indexOf('dong', 5)); //kết quả -1
  print(viDu.indexOf(RegExp(r'[A-Z][a-z]'))); //kết quả 0  
}
```

#### Lấy vị trí cuối cùng của xâu con

Tương tự `indexOf(c,[int start = 0])`, ta sử dụng phương thức  `lastIndexOf(c,[int? start])` để tìm kiếm ngược từ cuối xâu về đầu xâu.

#### Chuyển đổi sang chữ hoa, chữ thường

- `toLowerCase()` trả về một xâu mới dạng chữ thường của xâu ban đầu
- `toUpperCase()` trả về một xâu mới dạng chữ HOA của xâu ban đầu

#### Cắt khoảng trắng

- `trim()` dùng để cắt các khoảng trắng (cấu cách, dấu tab, kí tự xuống dòng) ở 2 đầu của xâu
- `trimLef()` và `trimRight()` dùng để cắt các khoảng trắng (cấu cách, dấu tab, kí tự xuống dòng) ở đầu bên trái, đầu bên phải của xâu

```dart
void main() {
  String str1 = ' \n \t Mua Xuan sang co hoa anh dao\n   ';
  print('|' + str1.trim() + '|');
  print('|' + str1.trimRight() + '|');
  print('|' + str1.trimLeft() + '|');
  print('|' + str1 + '|');
}
```

#### Nối hai xâu trong Dart

Bạn có thể sử dụng [toán tử](https://o2.edu.vn/cac-phep-toan-trong-dart-toan-tu-dart-flutter/) `+` để nối hai xâu `String` trong Dart.

```dart
void main() {
  String str1 = 'Xuân Hạ Thu Đông';
  String str2 = '... Rồi Lại Xuân';
  print(str1 + str2);//kết quả 'Xuân Hạ Thu Đông... Rồi Lại Xuân'
}
```

#### Tách một xâu trong Dart thành danh sách

Sử dụng phương thức `split(kí_tự_tách)` để tách một `String` thành danh sách `List` các xâu con, ngăn cách nhau bởi `kí_tự_tách`

```dart
void main() {
  var text = "mùa xuân sang có hoa anh đào";

  var parts = text.split(' ');
  print(parts);

  print(text);
}
```

Nếu `kí_tự_tách` là xâu rỗng thì xâu ban đầu sẽ được tách thành danh sách gồm từng kí tự của nó

```dart
void main() {
  var word = 'abcdefgh';

  var words = word.split('');
  print(words);//kết quả [a, b, c, d, e, f, g, h] 
}
```

#### Thay thế xâu con

Sử dụng phương thức `replaceAll(s, t)` để thay thế tất cả các xâu con `s` bởi xâu `t` trong xâu ban đầu. Đương nhiên, kết quả trả về là một xâu mới, còn xâu ban đầu vẫn không thay đổi.

```dart
void main() {
  String str1 = 'Mua Xuan sang co hoa anh dao';
  print(str1.replaceAll('Xuan', 'Dong'));//kết quả 'Mua Dong sang co hoa anh dao'
  print(str1); //vẫn là 'Mua Xuan sang co hoa anh dao'
}
```

Dùng phương thức `replaceFirst(s, t, [startIndex = 0])` để thay thế tất cả các xâu con `s` bởi xâu `t` trong xâu ban đầu kể từ vị trí `startIndex`. Nếu không cung cấp tham số `startIndex`  thì nó nhận giá trị mặc định là `0` , tức là tìm kiếm từ đầu của xâu ban đầu. Đương nhiên, kết quả trả về là một xâu mới, còn xâu ban đầu vẫn không thay đổi.

#### Chuyển số sang xâu

Bạn sử dụng hàm `toString()` đối với các đối tượng kiểu số để chuyển một số sang xâu.

```dart
void main() {
  print(5); //kết quả 5
  print(5.runtimeType); //kết quả int
  print(5.toString()); //kết quả 5, nhưng đây là kiểu String
  print(5.toString().runtimeType); //kết quả String
}
```

Lưu ý rằng phương thức này cũng có thể sử dụng trên các `object` khác. Khi đó kết quả trả về thường là thông tin của `object` đó, chẳng hạn:

```dart
void foo() {
  print('Example function');
}

void main() {
  print(foo.toString()); //kết quả Closure 'foo'
}
```

#### Duyệt qua các kí tự của String

Phương thức `runes` trả về một `Iterable` gồm các mã Unicode của từng kí tự trong xâu. Kết hợp phương thức `runes` với vòng lặp `for`, chúng ta có thể duyệt qua từng kí tự của xâu.

```dart
void main() {
  var word = 'abcdefgh';

  print(word.runes); //kết quả (97, 98, 99, 100, 101, 102, 103, 104)
  for (var c in word.runes) {
    print(String.fromCharCode(c));
  }

  for (var c in word.runes) {
    print(c);
  }
}
```

Hoặc ta có thể tách một xâu ra thành một List rồi duyệt qua từng phần tử của List

```dart
void main() {
  var word = 'abcdefgh';

  var words = word.split('');
  print(words);//kết quả [a, b, c, d, e, f, g, h]
  
  for (var c in words) {
    print(c);
  }
}
```

Nếu không thích, chúng ta có thể duyệt qua bằng vòng `for` thông thường

```dart
void main() {
  var word = 'abcdefgh';
  
  int l = word.length;
  for(int i = 0; i < l; i++){
    print(word[i]);
  }  
}
```

