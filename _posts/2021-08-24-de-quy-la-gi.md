---
layout: post
title: Đệ quy là gì?
subtitle: Bài viết giới thiệu về (thuật toán) chương trình đệ quy và một số ví dụ minh hoạ
categories: dart algorithms
tags: [đệ quy, dart, flutter]
---

## Đệ quy là gì?

Đệ quy (tiếng Anh: recursion) là phương pháp dùng trong các chương trình máy tính trong đó có một hàm tự gọi chính nó.

Ưu điểm của phương pháp đệ quy là tiếp cận xử lý vấn đề bằng những đoạn code gọn gàng, dễ đọc. Nhược điểm là nguy cơ tràn bộ nhớ Stack.

## Một số ví dụ minh hoạ thuật toán đệ quy

#### Chương trình tính giai thừa của một số tự nhiên

**Đề bài.** Cho một số tự nhiên `n`. Viết chương trình tính giai thừa của `n`.  In ra màn hình kết quả tìm được.

> Giai thừa của số tự nhiên $1$ là $1$, của số $n>1$, kí hiệu là $n!$ được tính bởi công thức 
>
> $$
> n!=n\times(n-1)\times(n-2)\times...\times3\times2\times1
> $$

**Phân tích.** 

Giả sử chúng ta cần tính `6!`. Theo định nghĩa của giai thừa, chúng ta có

```dart
6!=6*5*4*3*2*1
```

Ta nhận thấy ngay, `5*4*3*2*1` lại chính là `5!` nên có thể viết lại 

```dart
6!=6*5!
```

Như vậy để tính được `6!` chúng ta chỉ cần tính được `5!` rồi đem kết quả nhân với `6`. Tương tự, muốn tính được `5!` chúng ta cần tính được `4!` rồi đem kết quả nhân với `5`. Cứ như thế cho tới `2!=2*1!=2*1`.

Tổng quát, nếu như chúng ta có một hàm, đặt tên là `factorial(n)` giúp tính giai thừa của số tự nhiên `n` thì ta chỉ cần đem `n` nhân với chính hàm đó nhưng tham số là `n-1` thay vì `n`.

```dart
factorial(n) =  n*factorial(n-1)
```

Và chúng ta có lời giải như sau đây.

**Lời giải**

```dart
int factorial(int n){
	if (n == 1) return 1;
    else return n * factorial(n-1);
}
void main() {
  print(factorial(6)); //Kết quả 720
}
```

Chúng ta hoàn toàn có thể sử dụng vòng lặp `for` để viết chương trình này:

```dart
void main() {
  int n = 6; //giả sử số cần tính giai thừa là 6
  int fact = 1;
  for (int i = 1; i <= n; i++) {
    fact = fact * i;
  }
  print(fact); //Kết quả 720
}
```

#### Chương trình tính tổng của `n` số tự nhiên từ `1` tới `n`

**Đề bài.** Viết chương trình tính tổng các số tự nhiên liên tiếp từ `1` tới `n`

**Lời giải.**

```dart
int sum(n) {
  if (n == 1)
    return 1;
  else
    return n + sum(n - 1);
}

void main() {
  print(sum(100)); //Kết quả 5050
}
```

 Chương trình không dùng đệ quy:

```dart
void main() {
  int n = 100;
  int sum = 0;
  for (int i = 1; i <= n; i++) {
    sum += i;
  }
  print(sum); //Kết quả 5050
}
```

#### Chương trình tính số Fibonacci

> Dãy số Fibonacci là dãy vô hạn các số tự nhiên bắt đầu bằng hai phần tử `1`  và `1`, các phần tử sau đó được thiết lập theo quy tắc mỗi phần tử luôn bằng tổng hai phần tử trước nó. Công thức truy hồi của dãy Fibonacci là:
>
> $$
> f(1)=1, f(2)=1,f(n)=f(n-1) + f(n-2), \forall n \ge 2
> $$

**Đề bài.** Tính số Fibonacci thứ `n`, ví dụ với `n = 37` thì kết quả là `24157817`

```dart
void main() {
  print(fibo(37)); //Kết quả 24157817
}

int fibo(int n) {
  if (n == 1 || n == 2)
    return 1;
  else
    return fibo(n - 1) + fibo(n - 2);
}
```

Lưu ý rằng một khi đã thực thi lệnh `return` thì các câu lệnh phía sau của hàm đó sẽ bị bỏ qua. Do đó, chương trình trên có thể viết gọn hơn như sau:

```dart
void main() {
  print(fibo(37)); //Kết quả 24157817
}

int fibo(int n) {
  if (n == 1 || n == 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}
```

