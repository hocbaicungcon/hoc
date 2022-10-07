---
layout: post
title: 20 bài tập Python có lời giải
categories: python
tags: [python, bài tập]
subtitle: Bài tập Python có hướng dẫn như dãy Fibonacci, tính giai thừa, tính tổng, tạo class...
---
## 20 bài tập Python có lời giải

**Bài 1.** Viết chương trình tìm tất cả các số chia hết cho `7` nhưng không phải bội số của `5`, nằm trong đoạn `2000` và `3200` (tính cả `2000` và `3200`). Các số thu được sẽ được in thành chuỗi trên một dòng, cách nhau bằng dấu phẩy.

```python
j=[] for i in range(2000, 3201):
    if (i%7==0) and (i%5!=0):
        j.append(str(i))
print (','.join(j))
```

 Nếu chỉ cần in ra màn hình kết quả, chúng ta có thể không cần sử dụng `List`.

```python
for i in range(2000, 3201):
    if (i % 7 == 0) and (i % 5 != 0):
        print(i, end=' ')
```

**Bài 2.** Viết một chương trình có thể tính giai thừa của một số cho trước. Kết quả được in thành [chuỗi](https://o2.edu.vn/kieu-xau-string-trong-python-kieu-chuoi-trong-python/) trên một dòng, phân tách bởi dấu phẩy. Ví dụ, số cho trước là `8` thì kết quả đầu ra phải là `40320`.

```python
n = int(input("Nhập số cần tính giai thừa:")) 

def fact(n):
    if n==0:
        return 1
    else:
        return n*fact(n-1)
print(fact(n))
```

Nếu chỉ sử dụng vòng lặp, không sử dụng hàm và lời gọi [đệ quy](https://o2.edu.vn/de-quy-la-gi/), ta có thể làm như sau:

```python
n = int(input('Enter a number '))

factorial = 1

for i in range(1,n+1):
    factorial *= i

print(factorial)
```

**Bài 03.** Với số nguyên `n` nhất định, hãy viết chương trình để tạo ra một dictionary chứa `(i, i*i)` như là số nguyên từ `1` đến `n` (bao gồm cả `1` và `n`) sau đó in ra dictionary này. Ví dụ: Giả sử số `n` là `8` thì đầu ra sẽ là: `{1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64}`.

```python
n = int(input('Enter a number '))
d = dict()

for i in range(1, n+1):
    d[i] = i*i

print(d)
```

**Bài 04.** Viết chương trình chấp nhận một chuỗi số, phân tách bằng dấu phẩy từ giao diện điều khiển, tạo ra một `List` và một `tuple` chứa mọi số.

Ví dụ: Đầu vào được cung cấp là `34,67,55,33,12,98` thì đầu ra là:

```python
['34', '67', '55', '33', '12', '98']`
`('34', '67', '55', '33', '12', '98')
```

Chương trình này chỉ đơn giản là sử dụng hàm `split()` và chuyển một `List` sang một `tuple`.

```python
values=input("Nhập vào các giá trị:") 

l=values.split(",") 

t=tuple(l) 

print (l) 

print (t)
```

**Bài 05.** Viết một hàm tính giá trị bình phương của một số.

```python
# square of a number

x = int(input("Enter a number: "))

def square(x):
    return x * x
```

**Bài 06.** Viết chương trình tính số Fibonacci thứ `n`, với `n` nhập vào từ bàn phím.

```python
# find fibonacci number

n = int(input("Enter a number: "))

def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

**Bài 07.** Viết một chương trình nhập vào một danh sách các số và tạo một danh sách mới chỉ gồm phần tử đầu tiên và cuối cùng của danh sách đó. Viết chương trình sử dụng hàm.

Ví dụ, nhập vào danh sách `[5, 10, 15, 20, 25]` thì kết quả trả về là danh sách `[5, 25]`

```python
def list_ends(a_list):
    return [a_list[0], a_list[len(a_list)-1]]
```

**Bài 08.** Viết một hàm nhận vào ba số thực và trả về số lớn nhất trong ba số. Lưu ý, không sử dụng hàm `max()` của Python.

```python
# max of three numbers

def max_of_three(a, b, c):
    if a > b:
        if a > c:
            return a
        else:
            return c
    else:
        if b > c:
            return b
        else:
            return c
```

**Bài 09.** Viết chương trình yêu cầu người dùng nhập vào một chuỗi và in ra màn hình thông báo chuỗi đó có phải là chuỗi **palindrome** hay không. (Chuỗi **Palindrome** là một chuỗi mà đọc xuôi và ngược đều như nhau, ví dụ `ABCDCBA`.)

Cách giải thứ nhất, sử dụng cách đảo ngược xâu:

```python
wrd=input("Please enter a word")

wrd=str(wrd)

rvs=wrd[::-1]

print(rvs)

if wrd == rvs:
    print("This word is a palindrome")
else:
    print("This word is not a palindrome")
```

Cách thứ hai, sử dụng vòng lặp `for`

```python
def reverse(word):
   x = ''
   for i in range(len(word)):
      x += word[len(word)-1-i]
   return x

word = input('give me a word:\n')
x = reverse(word)
if x == word:
   print('This is a Palindrome')
else:
   print('This is NOT a Palindrome')
```

**Bài 10.** Viết chương trình hỏi người dùng một số tự nhiên n và in ra tất cả ước số của con số đó.

```python
n = int(input("Enter a number: "))
for i in range(1, n + 1):
    if n % i == 0:
        print(i)
```

**Bài 11.** Viết một chương trình (sử dụng các hàm) yêu cầu người dùng nhập một chuỗi dài gồm nhiều từ. In lại cho người dùng một chuỗi mới với thứ tự từ ngữ được đảo ngược lại với thứ tự ban đầu. Ví dụ, khi người dùng nhập chuỗi: `Toi la Phuong` thì in ra màn hình `Phuong la Toi`

```python
sentense = input("Enter a sentence: ")
words = sentence.split()
words.reverse()
sentence = " ".join(words)
print(sentence)
```

**Bài 12.** Viết chương trình kiểm tra xem số n có là số nguyên tố hay không.

```python
# check prime number
n = int(input("Enter a number: "))
for i in range(2, n):
    if n % i == 0:
        print("Not a prime number")
        break
else:
    print("Prime number")
```

**Bài 13.** Viết một chương trình nhập vào hai số tự nhiên `m`, `n`. In ra màn hình mảng hai chiều mà phần tử trong hàng thứ `i` và cột thứ `j` của mảng là `i*j`.

Ví dụ: Giá trị `m`, `n` nhập vào là `3` và `5` thì đầu ra là: `[[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8]]`

```python
m, n = map(int, input('Enter two numbers: ').split())
array2 = [[0 for i in range(n)] for j in range(m)]
for row in range(m):
    for col in range(n):
        array2[row][col] = row * col
print(array2)
```

**Bài 14.** Viết một chương trình nhận chuỗi từ do người dùng nhập vào, phân tách nhau bởi dấu phẩy và in những từ đó thành chuỗi theo thứ tự bảng chữ cái, phân tách nhau bằng dấu phẩy.

Giả sử đầu vào được nhập là: `without,hello,bag,world` thì đầu ra sẽ là `bag,hello,without,world`.

```python
items=[x for x in input("Nhập một chuỗi: ").split(',')]
items.sort()
print (','.join(items))
```

**Bài 15.** Viết chương trình giải phương trình bậc hai $ax^2+bx+c=0$ với $a, b, c$ là số nguyên và được nhập vào từ bàn phím.

```python
a, b, c = map(int, input('Nhập a, b, c cách nhau bằng dấu cách: ').split())
if a == 0:
    if b == 0:
        if c == 0:
            print("Phương trình có vô số nghiệm")
        else:
            print("Phương trình vô nghiệm")
    else:
        print("Phương trình có một nghiệm x =", -c/b)
else:
    delta = b**2 - 4*a*c
    if delta < 0:
        print("Phương trình vô nghiệm")
    elif delta == 0:
        print("Phương trình có nghiệm kép x1 = x2 =", -b/(2*a))
    else:
        print("Phương trình có 2 nghiệm phân biệt x1 =", (-b + delta**0.5)/(2*a), "và x2 =", (-b - delta**0.5)/(2*a))
```

**Bài 16.** Viết chương trình tính tổng của các chữ số của môt số nguyên dương `n` trong Python. Số nguyên dương `n` được nhập từ bàn phím.

```python
def totalDigitsOfNumber(n):
    total = 0;
    while (n > 0):
        total = total + n % 10;
        n = int(n / 10);
    return total;
 
n = int(input("Nhập số nguyên dương n = "));
print("Tổng các chữ số của", n , "là", totalDigitsOfNumber(n));
```

**Bài 17.** Viết chương trình sinh các xâu nhị phân có độ dài `n`.

Xem lời giải tại đây [Thuật toán sinh các dãy nhị phân có độ dài n](https://o2.edu.vn/thuat-toan-sinh-cac-day-nhi-phan-co-do-dai-n/)

**Bài 18.** Viết chương trình giải bài toán [Bài toán Tháp Hà Nội (Tower of Hanoi)](https://o2.edu.vn/bai-toan-thap-ha-noi-tower-of-ha-noi/)

**Bài 19.** Viết chương trình phân tích số nguyên dương `n` thành thừa số nguyên tố.

```python
def phanTichSoNguyen(n):
    i = 2;
    listNumbers = [];
    # phân tích
    while (n > 1):
        if (n % i == 0):
            n = int(n / i);
            listNumbers.append(i);
        else:
            i = i + 1;
    # nếu listNumbers trống thì add n vào listNumbers
    if (len(listNumbers) == 0):
        listNumbers.append(n);
    return listNumbers;
 
n = int(input("Nhập số nguyên dương n = "));

listNumbers = phanTichSoNguyen(n);
size = len(listNumbers);
sb = "";
for i in range(0, size - 1):
    sb = sb + str(listNumbers[i]) + " x ";
sb = sb + str(listNumbers[size-1]);
# in kết quả ra màn hình
print("Kết quả:", n, "=", sb);
```

**Bài 20.** Định nghĩa một `class` có ít nhất 2 method:

- `getString`: để nhận một chuỗi do người dùng nhập vào từ giao diện điều khiển.
- `printString`: in chuỗi vừa nhập sang chữ hoa.

Thêm vào các hàm hiểm tra đơn giản để kiểm tra method của class.

Ví dụ: Chuỗi nhập vào là o2.edu.vn thì đầu ra phải là O2.EDU.VN

```python
class InputOutString(object):
   def __init__(self):
       self.s = ""

   def getString(self):
       self.s = input("Nhập chuỗi:")
   def printString(self):
       print (self.s.upper())

strObj = InputOutString()
strObj.getString()
strObj.printString()
```

