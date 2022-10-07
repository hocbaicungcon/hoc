---
layout: post
title: 100+ Bài tập Python có lời giải
subtitle: 100+ Bài tập Python có lời giải dành cho học sinh lớp 11
categories: python
tags: [python, bài tập, exercises]
---
# Bài tập Python thực hành với code mẫu 

Hơn 100 bài tập Python kèm code mẫu được chia thành 3 cấp độ dành cho cả người mới bắt đầu học lập trình, người đã học lập trình nhưng mới học Python và những người muốn nâng cao trình độ Python. Mỗi bài tập đều có đầy đủ các phần là yêu cầu của bài, gợi ý làm bài và lời giải (code mẫu).

## 1. Mô tả cấp độ Python

**Level 1**: Người vừa trải qua khóa học tổng quan về Python có thể giải quyết một số vấn đề với một đến hai lớp (class) đơn giản hoặc hàm Python. Những bài tập thuộc cấp độ này có thể tìm thấy trong các sách giáo khoa, tài liệu hướng dẫn thông thường.

**Level 2**: Người mới học Python nhưng đã có nền tảng lập trình tương đối mạnh mẽ từ trước, có thể giải quyết các vấn đề liên quan tới 3 lớp hoặc hàm Python. Những bài tập này thường không tìm thấy trong sách giáo khoa.

**Level 3** Nâng cao, sử dụng Python để giải quyết những vấn đề phức tạp hơn bằng cách sử dụng nhiều hàm, cấu trúc dữ liệu và thuật toán phong phú. Ở cấp độ này bạn có thể giải quyết các vấn đề sử dụng vài package Python tiêu chuẩn và những kỹ thuật lập trình nâng cao.

## 2. Cấu trúc bài tập Python

Mỗi bài tập Python trong trang này sẽ gồm có 3 phần:

- Câu hỏi.
- Gợi ý.
- Code mẫu.

## 3. Bài tập Python level 1

### **Bài 01:**

Câu hỏi:

Viết chương trình tìm tất cả các số chia hết cho `7` nhưng không phải bội số của `5`, nằm trong đoạn `2000` và `3200` (tính cả `2000` và `3200`). Các số thu được sẽ được in thành chuỗi trên một dòng, cách nhau bằng dấu phẩy.

Gợi ý:

- Sử dụng `range(#begin, #end)`

Code mẫu:

```python
j=[]
for i in range(2000, 3201):
    if (i%7==0) and (i%5!=0):
        j.append(str(i))
print (','.join(j))
```

### **Bài 02:**

Câu hỏi:

Viết một chương trình có thể tính giai thừa của một số cho trước. Kết quả được in thành chuỗi trên một dòng, phân tách bởi dấu phẩy. Ví dụ, số cho trước là `8` thì kết quả đầu ra là `40320`.

Gợi ý:

Trong trường hợp dữ liệu đầu vào được cung cấp, bạn hãy chọn cách để người dùng nhập số vào.

Code mẫu:

```python
x=int(input("Nhập số cần tính giai thừa:"))
def fact(x):
    if x == 0:
        return 1
    return x * fact(x - 1)
print (fact(x))
```

### **Bài 03:**

Câu hỏi:

Với số nguyên `n` nhất định, hãy viết chương trình để tạo ra một `dictionary` chứa `(i, i*i)` như là số nguyên từ `1` đến `n` (bao gồm cả `1` và `n`) sau đó in ra `dictionary` này. 
Ví dụ: Giả sử số `n` là `8` thì đầu ra sẽ là: `{1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64}`.

Gợi ý:

- Viết lệnh yêu cầu nhập số nguyên `n`, sau đó dùng vòng lặp `for`.

Code mẫu:

```python
n=int(input("Nhập vào một số:"))
d=dict()
for i in range(1,n+1):
    d[i]=i*i
print (d)
```

### **Bài 04:**

Câu hỏi:

Viết chương trình chấp nhận một chuỗi số, phân tách bằng dấu phẩy từ giao diện điều khiển, tạo ra một danh sách và một tuple chứa mọi số.

Ví dụ: Đầu vào được cung cấp là `34,67,55,33,12,98` thì đầu ra là:

`['34', '67', '55', '33', '12', '98']
('34', '67', '55', '33', '12', '98')`

Gợi ý:

- Viết lệnh yêu cầu nhập vào các giá trị sau đó dùng quy tắc chuyển đổi kiểu dữ liệu để hoàn tất.

Code mẫu:

```python
values=input("Nhập vào các giá trị:")
l=values.split(",")
t=tuple(l)
print (l)
print (t)
```

### **Bài 05:**

Câu hỏi:

Định nghĩa một `class` có ít nhất 2 `method`:

- `getString`: để nhận một chuỗi do người dùng nhập vào từ giao diện dòng lệnh.
- `printString`: in chuỗi vừa nhập sang chữ hoa.

Thêm vào các hàm kiểm tra đơn giản để kiểm tra `method` của `class`.

Ví dụ: Chuỗi nhập vào là `divin.dev` thì đầu ra phải là: `DIVIN.DEV`

Gợi ý:

- Sử dụng `__init__` để xây dựng các tham số.

Code mẫu:

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

### **Bài 06:**

Câu hỏi:

Viết một `method` tính giá trị bình phương của một số.

Gợi ý:

- Có thể sử dụng toán tử `**` để tính lũy thừa.

Code mẫu:

```python
x=int(input("Nhập một số:")) #nhập số cần tính bình phương từ giao diện
def square(num):  #định nghĩa bình phương của một số
  return num ** 2
print (square(2)) #in bình phương của 2
print (square(3)) #in bình phương của 3
print (square(x)) #in bình phương của x
```

### **Bài 07:**

Câu hỏi:

Python có nhiều hàm được tích hợp sẵn, nếu không biết cách sử dụng nó, bạn có thể đọc tài liệu trực tuyến hoặc tìm vài cuốn sách. Nhưng Python cũng có sẵn tài liệu về hàm cho mọi hàm tích hợp trong Python. Yêu cầu của bài tập này là viết một chương trình để in tài liệu về một số hàm Python được tích hợp sẵn như `abs()`, `int()`, `input()` và thêm tài liệu cho hàm bạn tự định nghĩa.

Gợi ý:

- Sử dụng `__doc__`

Code mẫu:

```python
print (abs.__doc__)
print (int.__doc__)
print (input.__doc__)
def square(num):
 '''Trả lại giá trị bình phương của số được nhập vào.

 Số nhập vào phải là số nguyên.
 '''
 return num ** 2

print (square.__doc__)
```

### **Bài 08:**

Câu hỏi:

Định nghĩa một lớp gồm có tham số lớp và có cùng tham số `instance`.

Gợi ý:

- Khi định nghĩa tham số `instance`, cần thêm nó vào `__init__`
- Bạn có thể khởi tạo một đối tượng với tham số bắt đầu hoặc thiết lập giá trị sau đó.

Code mẫu:

```python
class Person:
 # Định nghĩa lớp "name"
 name = "Person"
def __init__(self, name = None):
 # self.name là biến instance
 self.name = name

jeffrey = Person("Jeffrey")
print ("%s name is %s" % (Person.name, jeffrey.name))

nico = Person()
nico.name = "Nico"
print ("%s name is %s" % (Person.name, nico.name))
```

### Bài 9:

Câu hỏi: Tính tuổi dựa trên ngày tháng năm sinh nhập vào.

Ví dụ: Nhập vào ngày tháng năm sinh dạng `y/m/d`, hãy tính tuổi của người này.

Gợi ý: Sử dụng `module` `datetime`. Sử dụng `datetime`, chúng ta có thể tìm tuổi bằng cách trừ năm sinh cho năm hiện tại.

Code mẫu:

```python
import datetime

print("Mời bạn vui lòng nhập ngày tháng năm sinh để tính tuổi")
birth_day = int(input("Ngày sinh:"))
birth_month = int(input("Tháng sinh:"))
birth_year = int(input("Năm sinh:"))

current_year = datetime.date.today().year
current_month = datetime.date.today().month
current_day = datetime.date.today().day

age_year = current_year - birth_year
age_month = abs(current_month-birth_month)
age_day = abs(current_day-birth_day)

print("### Tuổi của bạn chính xác là:### \n", age_year, " tuổi ", age_month, " tháng và ", age_day, " ngày")
```

## 4. Bài tập Python level 2

### **Bài 09:**

Câu hỏi:

Viết chương trình và in giá trị phần nguyên của `Q` theo công thức `Q = sqrt(((2 * C * D)/H))`. Với giá trị cố định của `C` là `50`, `H` là `30`. `D` là dãy các giá trị tùy ý, được nhập vào từ giao diện người dùng, các giá trị của `D` được phân cách bằng dấu phẩy.

Ví dụ: Giả sử chuỗi giá trị của `D` nhập vào là `100,150,180` thì đầu ra sẽ là `18,22,24`.

Gợi ý:

- Nếu đầu ra nhận được là một số dạng thập phân, bạn cần làm tròn thành giá trị gần nhất, ví dụ `26.0` sẽ được in là `26`.
Code mẫu:

```python
#!/usr/bin/env python
import math
c=50
h=30
value = []
items=[x for x in input("Nhập giá trị của d: ").split(',')]
for d in items:
    value.append(str(int(round(math.sqrt(2*c*float(d)/h)))))
print (','.join(value))
```

### **Bài 10:**

Câu hỏi:

Viết một chương trình nhận vào hai số `X`, `Y` và tạo ra một mảng 2 chiều. Giá trị phần tử trong hàng thứ `i` và cột thứ `j` của mảng phải là `i*j`. Lưu ý rằng `i=0,1,...,X-1`; `j=0,1,...,Y-1`.

Ví dụ: Giá trị `X`, `Y` nhập vào là `3`, `5` thì đầu ra là: `[[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8]]`

Gợi ý:

- Viết lệnh để nhận giá trị `X`, `Y` từ giao diện điều khiển do người dùng nhập vào.

Code mẫu:

```python
input_str = input("Nhập X, Y: ")
dimensions=[int(x) for x in input_str.split(',')]
rowNum=dimensions[0]
colNum=dimensions[1]
multilist = [[0 for col in range(colNum)] for row in range(rowNum)]
for row in range(rowNum):
    for col in range(colNum):
        multilist[row][col]= row*col

print (multilist)
```

### **Bài 11:**

Câu hỏi:

Viết một chương trình chấp nhận chuỗi từ do người dùng nhập vào, phân tách nhau bởi dấu phẩy và in những từ đó thành chuỗi theo thứ tự bảng chữ cái, phân tách nhau bằng dấu phẩy.

Giả sử đầu vào được nhập là: `without,hello,bag,world` thì đầu ra sẽ là: `bag,hello,without,world`.



Code mẫu:

```python
items=[x for x in input("Nhập một chuỗi: ").split(',')]
items.sort()
print (','.join(items))
```

### **Bài 12:**

Câu hỏi:

Viết một chương trình chấp nhận chuỗi là các dòng được nhập vào, chuyển các dòng này thành chữ in hoa và in ra màn hình. Giả sử đầu vào là:

`Hello world
Practice makes perfect`

Thì đầu ra sẽ là:

`HELLO WORLD
PRACTICE MAKES PERFECT`



Code mẫu:

```python
lines = []
while True:
   s = input()
   if s:
      lines.append(s.upper())
   else:
      break
for sentence in lines:
    print (sentence)
```

### **Bài 13:**

Câu hỏi:

Viết một chương trình chấp nhận đầu vào là một chuỗi các từ tách biệt bởi khoảng trắng, loại bỏ các từ trùng lặp, sắp xếp theo thứ tự bảng chữ cái, rồi in chúng.

Giả sử đầu vào là: `hello world and practice makes perfect and hello world again`

Thì đầu ra là: `again and hello makes perfect practice world`

Gợi ý:

- Trong trường hợp dữ liệu đầu vào được nhập vào chương trình nó nên được giả định là dữ liệu được người dùng nhập vào từ giao diện điều khiển.
- Sử dụng `set` để loại bỏ dữ liệu trùng lặp tự động và dùng `sorted()` để sắp xếp dữ liệu.

Code mẫu:

```python
s = input("Nhập chuỗi của bạn: ")
words = [word for word in s.split(" ")]
print (" ".join(sorted(list(set(words)))))
```

### **Bài 14:**

Câu hỏi:

Viết một chương trình chấp nhận đầu vào là chuỗi các số nhị phân 4 chữ số, phân tách bởi dấu phẩy, kiểm tra xem chúng có chia hết cho 5 không. Sau đó in các số chia hết cho 5 thành dãy phân tách bởi dấu phẩy.

Ví dụ đầu vào là: `0100,0011,1010,1001`

Đầu ra sẽ là: `1010`



Code mẫu:

```python
value = []
items=[x for x in input("Nhập các số nhị phân: ").split(',')]
for p in items:
    intp = int(p, 2)
    if not intp%5:
    value.append(p)
print (','.join(value))
```

### **Bài 15:**

Câu hỏi:

Viết một chương trình tìm tất cả các số trong đoạn `1000` và `3000` (tính cả 2 số này) sao cho tất cả các chữ số trong số đó là số chẵn. In các số tìm được thành chuỗi cách nhau bởi dấu phẩy, trên một dòng.



Code mẫu:

```python
values = []
for i in range(1000, 3001):
    s = str(i)
    if (int(s[0])%2==0) and (int(s[1])%2==0) and (int(s[2])%2==0) and (int(s[3])%2==0):
 values.append(s)
print (",".join(values))
```

### **Bài 16:**

Câu hỏi:

Viết một chương trình chấp nhận đầu vào là một câu, đếm số chữ cái và chữ số trong câu đó. Giả sử đầu vào sau được cấp cho chương trình: `hello world! 123`

Thì đầu ra sẽ là:

`Số chữ cái là: 10
Số chữ số là: 3`



Code mẫu:

```python
s = input("Nhập câu của bạn: ")
d={"DIGITS":0, "LETTERS":0}
for c in s:
    if c.isdigit():
        d["DIGITS"]+=1
    elif c.isalpha():
        d["LETTERS"]+=1
    else:
        pass
print ("Số chữ cái là:", d["LETTERS"])
print ("Số chữ số là:", d["DIGITS"])
```

### **Bài 17:**

Câu hỏi:

Viết một chương trình chấp nhận đầu vào là một câu, đếm chữ hoa, chữ thường.

Giả sử đầu vào là: Xin Chao Ban

Thì đầu ra là:

- Chữ hoa: 3
- Chữ thường: 6



Code mẫu:

```python
s = input("Nhập câu của bạn: ")
d={"UPPER CASE":0, "LOWER CASE":0}
for c in s:
    if c.isupper():
        d["UPPER CASE"]+=1
    elif c.islower():
        d["LOWER CASE"]+=1
    else:
        pass
print ("Chữ hoa:", d["UPPER CASE"])
print ("Chữ thường:", d["LOWER CASE"])
```

### **Bài 18:**

Câu hỏi:

Viết một chương trình tính giá trị của `a+aa+aaa+aaaa` với `a` là số được nhập vào bởi người dùng.

Giả sử `a` được nhập vào là `1` thì đầu ra sẽ là: `1234`

Code mẫu:

```python
a = input("Nhập số a: ")
n1 = int( "%s" % a )
n2 = int( "%s%s" % (a,a) )
n3 = int( "%s%s%s" % (a,a,a) )
n4 = int( "%s%s%s%s" % (a,a,a,a) )
print ("Tổng cần tính là: ",n1+n2+n3+n4)
```

### **Bài 19:**

Câu hỏi:

Sử dụng một danh sách để lọc các số lẻ từ danh sách được người dùng nhập vào.

Giả sử đầu vào là: `1,2,3,4,5,6,7,8,9` thì đầu ra phải là: `1,3,5,7,9`

Code mẫu:

```python
values = input("Nhập dãy số của bạn, cách nhau bởi dấu phẩy: ")
numbers = [x for x in values.split(",") if int(x)%2!=0]
print (",".join(numbers))
```

### **Bài 20:**

Câu hỏi:

Viết chương trình tính số tiền thực của một tài khoản ngân hàng dựa trên nhật ký giao dịch được nhập vào từ giao diện điều khiển.

Định dạng nhật ký được hiển thị như sau:

```none
D 100
W 200

(D là tiền gửi, W là tiền rút ra).
```

Giả sử đầu vào được cung cấp là:

`D 300
D 300
W 200
D 100`

Thì đầu ra sẽ là: `500`



Code mẫu:

```python
import sys
netAmount = 0
while True:
    s = input("Nhập nhật ký giao dịch: ")
    if not s:
        break
    values = s.split(" ")
    operation = values[0]
    amount = int(values[1])
    if operation=="D":
        netAmount+=amount
    elif operation=="W":
        netAmount-=amount
    else:
        pass
print (netAmount)
```

## 5. Bài tập Python level 3

### **Bài 21:**

Câu hỏi:

Một website yêu cầu người dùng nhập tên người dùng và mật khẩu để đăng ký. Viết chương trình để kiểm tra tính hợp lệ của mật khẩu mà người dùng nhập vào.

Các tiêu chí kiểm tra mật khẩu bao gồm:

\1. Ít nhất 1 chữ cái nằm trong [a-z]
\2. Ít nhất 1 số nằm trong [0-9]
\3. Ít nhất 1 kí tự nằm trong [A-Z]
\4. Ít nhất 1 ký tự nằm trong [$ # @]
\5. Độ dài mật khẩu tối thiểu: 6
\6. Độ dài mật khẩu tối đa: 12

Chương trình phải chấp nhận một chuỗi mật khẩu phân tách nhau bởi dấu phẩy và kiểm tra xem chúng có đáp ứng những tiêu chí trên hay không. Mật khẩu hợp lệ sẽ được in, mỗi mật khẩu cách nhau bởi dấu phẩy.

Ví dụ mật khẩu nhập vào chương trình là: `ABd1234@1,a F1#,2w3E*,2We3345`

Thì đầu ra sẽ là: `ABd1234@1`



Code mẫu:

```python
import re
value = []
items=[x for x in input("Nhập mật khẩu: ").split(',')]
for p in items:
    if len(p)<6 or len(p)>12:
        continue
    else:
        pass
    if not re.search("[a-z]",p):
        continue
    elif not re.search("[0-9]",p):
        continue
    elif not re.search("[A-Z]",p):
        continue
    elif not re.search("[$#@]",p):
        continue
    elif re.search("\s",p):
        continue
    else:
        pass
    value.append(p)
print (",".join(value))
```

### **Bài 22:**

Câu hỏi:

Viết chương trình sắp xếp `tuple (name, age, score)` theo thứ tự tăng dần, `name` là `string`, `age` và `height` là `number`. Tuple được nhập vào bởi người dùng. Tiêu chí sắp xếp là:

Sắp xếp theo `name` sau đó sắp xếp theo `age`, sau đó sắp xếp theo `score`. Ưu tiên là tên > tuổi > điểm.

Nếu đầu vào là:

`Tom,19,80
John,20,90
Jony,17,91
Jony,17,93
Json,21,85`

Thì đầu ra sẽ là:

`[('John', '20', '90'), ('Jony', '17', '91'), ('Jony', '17', '93'), ('Json', '21', '85'), ('Tom', '19', '80')]`


Gợi ý: Sử dụng `itemgetter` để chấp nhận nhiều `key` sắp xếp.

Code mẫu:

```python
from operator import itemgetter, attrgetter
l = []
while True:
    s = input()
    if not s:
       break
    l.append(tuple(s.split(",")))

print (sorted(l, key=itemgetter(0,1,2)))
```

### **Bài 23:**

Câu hỏi:

Xác định một class với generator có thể lặp lại các số nằm trong khoảng `0` và `n`, và chia hết cho `7`.

Gợi ý: Sử dụng `yield`.

Code mẫu:

```python
def putNumbers(n):
    i = 0
    while i<n:
        j=i
        i=i+1
        if j%7==0:
            yield j
for i in putNumbers (100):
     print (i)
```

### **Bài 24:**

Câu hỏi:

Một Robot di chuyển trong mặt phẳng bắt đầu từ điểm đầu tiên `(0,0)`. Robot có thể di chuyển theo hướng `UP`, `DOWN`, `LEFT` và `RIGHT` với những bước nhất định. Dấu di chuyển của robot được đánh hiển thị như sau:

`UP 5
DOWN 3
LEFT 3
RIGHT 3`

Các con số sau phía sau hướng di chuyển chính là số bước đi. Hãy viết chương trình để tính toán khoảng cách từ vị trí hiện tại đến vị trí đầu tiên, sau khi robot đã di chuyển một quãng đường. Nếu khoảng cách là một số thập phân chỉ cần in só nguyên gần nhất.

Ví dụ: Nếu tuple sau đây là input của chương trình:

`UP 5
DOWN 3
LEFT 3
RIGHT 2`

thì đầu ra sẽ là `2`.



Code mẫu:

```python
import math
pos = [0,0]
while True:
    s = input()
    if not s:
        break
    movement = s.split(" ")
    direction = movement[0]
    steps = int(movement[1])
    if direction=="UP":
        pos[0]+=steps
    elif direction=="DOWN":
        pos[0]-=steps
    elif direction=="LEFT":
        pos[1]-=steps
    elif direction=="RIGHT":
        pos[1]+=steps
    else:
        pass
print (int(round(math.sqrt(pos[1]**2+pos[0]**2))))
```

### **Bài 25:**

Câu hỏi:

Viết chương trình tính tần suất các từ từ input. Output được xuất ra sau khi đã sắp xếp theo bảng chữ cái.

Giả sử input là: `New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3`.

Thì output phải là:

`2:2
3.:1
3?:1
New:1
Python:5
Read:1
and:1
between:1
choosing:1
or:2
to:1`

Code mẫu:

```python
freq = {} # frequency of words in text
line = input()
for word in line.split():
    freq[word] = freq.get(word,0)+1
words = sorted(freq.keys())
for w in words:
    print ("%s:%d" % (w,freq[w]))
```

## 6. Bài tập Python khác

### **Bài 26:**

Câu hỏi:

Định nghĩa 1 hàm có thể tính tổng hai số.

Gợi ý:

Định nghĩa 1 hàm với 2 số là đối số. Bạn có thể tính tổng trong hàm và trả về giá trị.

Code mẫu:

```python
def SumFunction(number1, number2): #định nghĩa hàm tính tổng
    return number1+number2
print (SumFunction(5,7)) #in tổng 2 số 5 và 7
```

### **Bài 27:**

Câu hỏi:

Định nghĩa một hàm có thể chuyển số nguyên thành chuỗi và in nó ra giao diện điều khiển

Gợi ý:

Sử dụng `str()` để chuyển đổi một số thành chuỗi.

Code mẫu:

```python
def printValue(n):
    print (str(n))
printValue(3)
```

### **Bài 28:**

Câu hỏi:

Định nghĩa hàm có thể nhận hai số nguyên trong dạng chuỗi và tính tổng của chúng, sau đó in tổng ra giao diện điều khiển.

Gợi ý:

Sử dụng `int()` để chuyển đổi một chuỗi thành số nguyên.

Code mẫu:

```python
def printValue(s1,s2):
    print (int(s1)+int(s2))
printValue("3","4") #Kết quả là 7
```

### **Bài 29:**

Câu hỏi:

Định nghĩa hàm có thể nhận 2 chuỗi từ input và nối chúng sau đó in ra giao diện điều khiển

Gợi ý: Sử dụng toán tử `+` để nối các chuỗi.

Code mẫu:

```python
def printValue(s1,s2):
    print (s1+s2)
printValue("3","4") #Kết quả là 34
```

### **Bài 30:**

Câu hỏi:

Định nghĩa một hàm có input là 2 chuỗi và in chuỗi có độ dài lớn hơn trong giao diện điều khiển. Nếu 2 chuỗi có chiều dài như nhau thì in tất cả các chuỗi theo dòng.

Gợi ý: Sử dụng hàm `len()` để lấy chiều dài của một chuỗi

Code mẫu:

```python
def printValue(s1,s2): 
    len1 = len(s1) 
    len2 = len(s2)
    if len1>len2:
        print (s1)
    elif len2>len1:
        print (s2)
    else:
        print(s1)
        print (s2) 
printValue("one","three")
```

### **Bài 31:**

Câu hỏi:

Định nghĩa hàm có thể chấp nhận input là số nguyên và in `Đây là một số chẵn` nếu nó chẵn và in `Đây là một số lẻ` nếu là số lẻ.

Gợi ý: Sử dụng toán tử `%` để kiểm tra xem số đó chẵn hay lẻ.

Code mẫu:

```python
def checkValue(n): 
    if n%2 == 0: 
print ("Đây là một số chẵn") 
    else: 
       print ("Đây là một số lẻ") 
checkValue(7)
```

### **Bài 32:**

Câu hỏi:

Định nghĩa một hàm có thể in dictionary chứa key là các số từ 1 đến 3 (bao gồm cả hai số) và các giá trị bình phương của chúng.

Gợi ý:

- Sử dụng `dict[key]=value` để nhập mục vào `dictionary`.
- Sử dụng toán từ `**` để lấy bình phương của một số.

Code mẫu:

```python
def printDict():
    d=dict() 
    d[1]=1 
    d[2]=2**2 
    d[3]=3**2 
    print (d) 
printDict()
```

Chạy code trên bạn sẽ được kết quả là một dictionary như sau: `{1: 1, 2: 4, 3: 9}`. 

### **Bài 33:**

Câu hỏi:

Định nghĩa một hàm có thể in `dictionary` chứa các `key` là số từ `1` đến `20` (bao gồm cả `1` và `20`) và các giá trị bình phương của chúng.

Gợi ý:

- Sử dụng `dict[key]=value` để nhập mục vào `dictionary`.
- Sử dụng toán từ `**` để lấy bình phương của một số.
- Sử dụng `range()` cho các vòng lặp.

Code mẫu:

```python
def printDict():
    d=dict() 
    for i in range(1,21): 
       d[i]=i**2 
    print (d) 
printDict()
```

Kết quả khi chạy code trên là: `{1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100, 11: 121, 12: 144, 13: 169, 14: 196, 15: 225, 16: 256, 17: 289, 18: 324, 19: 361, 20: 400}`

### **Bài 34**:

Câu hỏi:

Định nghĩa một hàm có thể tạo `dictionary`, chứa các key là số từ 1 đến 20 (bao gồm cả 1 và 20) và các giá trị bình phương của chúng. Hàm chỉ in các giá trị mà thôi.

Gợi ý:

- Sử dụng `dict[key]=value` để nhập mục vào `dictionary`.
- Sử dụng toán từ `**` để lấy bình phương của một số.
- Sử dụng `range()` cho các vòng lặp.
- Sử dụng `keys()` để di lặp các `key` trong `dictionary`. Có thể sử dụng `item()` để nhận cặp `key/value`.

Code mẫu:

```python
def printDict():
    d=dict() 
    for i in range(1,21): 
 d[i]=i**2 
    for (k,v) in d.items(): 
       print (v) 
printDict()
```

### **Bài 35:**

Câu hỏi:

Định nghĩa một hàm có thể tạo ra một `dictionary` chứa `key` là những số từ `1` đến `20` (bao gồm cả `1` và `20`) và các giá trị bình phương của `key`. Hàm chỉ cần in các `key`.

Code mẫu:

```python
def printDict():
 d=dict() 
 for i in range(1,21): 
 d[i]=i**2 
 for k in d.keys(): 
       print (k) 
printDict() 
```

### **Bài 36:**

Câu hỏi:

Định nghĩa một hàm có thể tạo và in `list` chứa các giá trị bình phương của các số từ `1` đến `20` (tính cả `1` và `20`).

Gợi ý:

- Sử dụng toán tử `**` để lấy giá trị bình phương.
- Sử dụng `range()` cho vòng lặp.
- Sử dụng `list.append()` để thêm giá trị vào `list`.

Code mẫu:

```python
def printList():
    li=list()
    for i in range(1,21):
        li.append(i**2)
    print (li)
printList() 
```

### **Bài 37:**

Câu hỏi:

Định nghĩa một hàm có thể tạo và in `list` chứa các giá trị bình phương của các số từ `1` đến `20` (tính cả `1` và `20`) và in `5` mục đầu tiên trong `list`.

Gợi ý:

- Sử dụng toán tử `**` để lấy giá trị bình phương.
- Sử dụng `range()` cho vòng lặp.
- Sử dụng `list.append()` để thêm giá trị vào `list`.
- Sử dụng `[n1:n2]` để cắt `list`.

Code mẫu:

```python
def printList():
    li=list() 
    for i in range(1,21): 
 li.append(i**2) 
    print (li[:5]) 
printList()
```

Chạy code trên bạn sẽ nhận được một list chứa giá trị bình phương của các số từ `1` đến `5`.

### **Bài 38:**

Câu hỏi:

Định nghĩa một hàm có thể tạo và in `list` chứa các giá trị bình phương của các số từ `1` đến `20` (tính cả `1` và `20`) và in `5` mục cuối cùng trong `list`.

Code mẫu:

```python
def printList():
    li=list()
    for i in range(1,21):
        li.append(i**2)
    print (li[-5:]) 
printList()
```

Khi chạy code trên bạn sẽ nhận được list chứa giá trị bình phương của `16, 17, 18, 19, 20`.

### **Bài 39:**

Câu hỏi:

Định nghĩa một hàm có thể tạo và in `list` chứa các giá trị bình phương của các số từ `1` đến `20` (tính cả `1` và `20`). Sau đó in tất cả các giá trị của `list`, trừ `5` mục đầu tiên.

Code mẫu:

```python
def printList():
    li=list()
    for i in range(1,21):
        li.append(i**2) 
    print (li[5:]) 
printList()
```

Kết quả:

```python
[36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400]
```

### **Bài 40:**

Câu hỏi:

Định nghĩa một hàm có thể tạo và in một `tuple` chứa các giá trị bình phương của các số từ `1` đến `20` (tính cả `1` và `20`).

Gợi ý:

- Sử dụng toán tử `**` để lấy giá trị bình phương.
- Sử dụng `range()` cho vòng lặp.
- Sử dụng `list.append()` để thêm giá trị vào `list`.
- Sử dụng `tuple()` để lấy giá `tuple` từ `list`.

Code mẫu:

```python
def printTuple():
    li=list()
    for i in range(1,21):
        li.append(i**2)
    print (tuple(li)) 
printTuple()
```

Kết quả:

```python
(1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400)
```

### **Bài 41:**

Câu hỏi:

Với `tuple` `(1,2,3,4,5,6,7,8,9,10)` cho trước, viết một chương trình in một nửa số giá trị đầu tiên trong 1 dòng và 1 nửa số giá trị cuối trong 1 dòng.

Gợi ý:

Sử dụng `[n1:n2]` để lấy một phần từ `tuple`.

Code mẫu:

```python
tp=(1,2,3,4,5,6,7,8,9,10)
tp1=tp[:5]
tp2=tp[5:]
print (tp1)
print (tp2) 
```

Kết quả:

```python
(1, 2, 3, 4, 5)
(6, 7, 8, 9, 10)
```

### **Bài 42:**

Câu hỏi:

Viết một chương trình để tạo `tuple` khác, chứa các giá trị là số chẵn trong `tuple` `(1,2,3,4,5,6,7,8,9,10)` cho trước.

Gợi ý:

- Sử dụng `for` để lặp `tuple`.
- Sử dụng `tuple()` để tạo `tuple` từ `list`.

Code mẫu:

```python
tp=(1,2,3,4,5,6,7,8,9,10)
li=list()
for i in tp: 
 if tp[-i]%2==0: 
       li.append(tp[i])

tp2=tuple(li)
print (tp2)
```

Kết quả:

```python
(2, 4, 6, 8, 10)
```

### **Bài 43:**

Câu hỏi:

Viết một chương trình để tạo ra và in `tuple` chứa các số chẵn được lấy từ `tuple (1,2,3,4,5,6,7,8,9,10)`.

Gợi ý:

- Sử dụng `for` để lặp lại `tuple`.
- Sử dụng `tuple()` để tạo ra một `tuple` từ một danh sách.

Code mẫu:

```python
tp=(1,2,3,4,5,6,7,8,9,10)
li=list()
for i in tp:
    if tp[i-1]%2==0:
        li.append(tp[i-1])
        tp2=tuple(li)
print (tp2)
```

Kết quả:

(2, 4, 6, 8, 10)

### **Bài 44:**

Yêu cầu:

Viết một chương trình Python nhận chuỗi nhập vào bởi người dùng, in "Yes" nếu chuỗi là "yes" hoặc "YES" hoặc "Yes", nếu không in "No".

Gợi ý:

- Sử dụng lệnh `if` để kiểm tra điều kiện.

Code mẫu:

```python
s = input ("Nhập chuỗi: ")
if s == "yes" or s == "YES" or s == "Yes":
   print ("Yes")
else:
    print ("No")
```

### **Bài 45:**

Yêu cầu:

Viết chương trình Python có thể lọc các số chẵn trong danh sách sử dụng hàm `filter`. Danh sách là `[1,2,3,4,5,6,7,8,9,10]`.

Gợi ý:

- Sử dụng `filter()` để lọc các yếu tố trong một `list`.
- Sử dụng `lambda` để định nghĩa hàm chưa biết.

Code mẫu:

```python
li = [1,2,3,4,5,6,7,8,9,10]
evenNumbers = list(filter (lambda x: x% 2 == 0, li))
print (evenNumbers)
```

Kết quả:

`[2, 4, 6, 8, 10]`

Lưu ý: Trong các phiên bản Python trước, bạn chỉ cần dùng hàm filter sẽ được trả kết quả đầu ra là một danh sách. Nhưng từ Python 3, phải dùng `list(filter())` thì kết quả trả về mới là `list`. Điều này cũng áp dụng với `map()`.

### **Bài 46:**

Yêu cầu:

Viết chương trình Python dùng `map()` để tạo `list` chứa các giá trị bình phương của các số trong `[1,2,3,4,5,6,7,8,9,10]`.

Gợi ý:

- Sử dụng `map()` để tạo `list`.
- Sử dụng `lambda` để định nghĩa hàm chưa biết.

Code mẫu:

```python
li = [1,2,3,4,5,6,7,8,9,10]
squaredNumbers = list(map (lambda x: x ** 2, li))
print (squaredNumbers)
```

Kết quả:

`[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`

### **Bài 47:**

Yêu cầu:

Viết chương trình Python dùng `map()` và `filter()` để tạo `list` chứa giá trị bình phương của các số chẵn trong `[1,2,3,4,5,6,7,8,9,10]`.

Code mẫu:

```python
li = [1,2,3,4,5,6,7,8,9,10]
squareOfEvenNumbers = list (map (lambda x: x ** 2, filter (lambda x: x% 2 == 0, li)))
print (squareOfEvenNumbers)
```

Kết quả:

`[4, 16, 36, 64, 100]`

### **Bài 48:**

Yêu cầu:

Viết chương trình Python dùng `filter()` để tạo danh sách chứa các số chẵn trong đoạn `[1,20]`.

Code mẫu:

```python
evenNumbers = list(filter (lambda x: x% 2 == 0, range (1,21)))
print (evenNumbers)
```

Kết quả:

`[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`

### **Bài 49:**

Yêu cầu:

Viết chương trình Python sử dụng `map()` để tạo `list` chứa giá trị bình phương của các số trong đoạn `[1,20]`.

Code mẫu:

```python
squaredNumbers = list(map(lambda x: x ** 2, range (1,21)))
print (squaredNumbers)
```

Kết quả:

`[1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400]
`
### **Bài 50:**

Yêu cầu:

Định nghĩa một `class` có tên là `Vietnam`, với `static` `method` là `printNationality`.

Gợi ý:

Sử dụng `@staticmethod` để định nghĩa `class` với `static` `method`.

Code mẫu:

```python
class Vietnam (object):
    @staticmethod
    def printNationality ():
        print ("Vietnam")
VietnamVodich = Vietnam ()
VietnamVodich.printNationality ()
Vietnam.printNationality ()
```

### **Bài 51:**

Yêu cầu:

Định nghĩa một class tên `Vietnam` và `class` con của nó là `Hanoi`.

Gợi ý:

- Sử dụng `Subclass(ParentClass)` để định nghĩa một `class` con.

Code mẫu:

```python
class Vietnam(object):
    pass

class Hanoi(Vietnam):
    pass
VietnamVodich = Vietnam()
NguoiHanoi = Hanoi()
print (VietnamVodich)
print (NguoiHanoi)
```

### **Bài 52:**

Yêu cầu:

Định nghĩa một class có tên là `Circle` có thể được xây dựng từ bán kính. `Circle` có một `method` có thể tính diện tích.

Gợi ý:

Sử dụng `def methodName(self)` để định nghĩa `method`.

Code mẫu:

```python
class Circle(object):
    def __init__(self, r):
       self.radius = r
    def area(self):
       return self.radius**2*3.14

aCircle = Circle(2)
print (aCircle.area())
```

### **Bài 53:**

Yêu cầu:

Định nghĩa `class` có tên là `Hinhchunhat` được xây dựng bằng chiều dài và chiều rộng. `Class` `Hinhchunhat` có method để tính diện tích.


Code mẫu:

```python
class Hinhchunhat(object):
    def __init__(self, l, w):
       self.dai = l
       self.rong = w
    def area(self):
       return self.dai*self.rong

aHinhchunhat = Hinhchunhat(10,2)
print (aHinhchunhat.area())
```

Trong code trên chiều dài hình nhữ nhật là `10`, chiều rộng là `2`. Chạy code ta được kết quả là `20`.

### **Bài 54:**

Yêu cầu:

Định nghĩa một `class` có tên là `Shape` và `class` con là `Square`. `Square` có hàm `init` để lấy đối số là chiều dài. Cả 2 `class` đều có hàm `area` để in diện tích của hình, diện tích mặc định của `Shape` là `0`.

Gợi ý:

Để ghi đè một method trong `super` `class`, chúng ta có thể định nghĩa một method có cùng tên trong `super` `class`.

Code mẫu:

```python
class Shape(object):
    def __init__(self):
       pass

    def area(self):
       return 0
class Square(Shape):
    def __init__(self, l):
       Shape.__init__(self)
       self.length = l

    def area(self):
       return self.length*self.length

aSquare= Square(3)
print (aSquare.area())
```

Với chiều dài là `3`, khi chạy code trên ta được kết quả là `9`.

### **Bài 55:**

Yêu cầu:

Đưa ra một `RuntimeError` `exception`.

Gợi ý:

- Sử dụng `raise()` để đưa ra `exception`.

Code mẫu:

*Code đơn giản:*

```python
raise RuntimeError('something wrong')
```

*Code phức tạp:*

```python
class RuntimeError(Exception):
    def __init__(self, mismatch):
       Exception.__init__(self, mismatch)
try:
    print ("And now, the Vocational Guidance Counsellor Sketch.")
    raise RuntimeError("Does not have proper hat")
    print ("This print statement will not be reached.")
except RuntimeError as problem:
    print ("Vocation problem: {0}".format(problem))
```

### **Bài 56:**

Yêu cầu:

Viết hàm để tính `5/0` và sử dụng `try/exception` để bắt lỗi.

Code mẫu:

```python
def throws():
    return 5/0
try:
    throws()
except ZeroDivisionError:
    print ("Chia một số cho 0!")
except Exception as problem:
    print ('Bắt được một exception')
finally:
    print ('Phép tính bị hủy')
```

### **Bài 57:**

Yêu cầu:

Định nghĩa một `class` `exception` tùy chỉnh, nhận một thông báo là thuộc tính.

Gợi ý:

- Để định nghĩa một `class` `exception` tùy chỉnh, chúng ta phải định nghĩa một `class` kế thừa từ `Exception`.

Code mẫu:

```python
class MyError(Exception):
     """My own exception class
     Attributes:
        msg -- explanation of the error
     """

     def __init__(self, msg):
        self.msg = msg

error = MyError("Có gì đó sai sai!")
print (error)
```

Khi chạy code trên, thông báo "`Có gì đó sai sai!`" sẽ được in ra màn hình.

### **Bài 58:**

Yêu cầu:

Giả sử rằng chúng ta có vài địa chỉ email dạng username@companyname.com, hãy viết một chương trình để in username của địa chỉ email cụ thể. Cả username và companyname chỉ bao gồm chữ cái.

Ví dụ: Nếu cung cấp địa chỉ email `admin@o2.edu.vn` thì đầu ra sẽ là `admin`.

Gợi ý:

Sử dụng `\w` để kiểm tra chữ cái.

Code mẫu:

```python
import re
emailAddress = input()
pat2 = "(\w+)@((\w+\.)+(com))"
re2 = re.match(pat2,emailAddress)
print (re2.group(1)) 
```

### **Bài 59:**

Yêu cầu:

Tương tự như bài 58, nhưng lần này ta sẽ viết hàm để lấy companyname.


Code mẫu:

```python
import re
emailAddress = input()
pat2 = "(\w+)@(\w+)\.(com)"
r2 = re.match(pat2,emailAddress)
print (r2.group(2))
```

### **Bài 60:**

Yêu cầu:

Viết một chương trình chấp nhận chuỗi từ được phân tách bằng khoảng trống và in các từ chỉ gồm chữ số.

Ví du: Nếu những từ sau đây là đầu vào của chương trình: `3 divin.dev 2 python`. Đầu ra sẽ là [`'3', '2']`

Gợi ý:

- Sử dụng `re.findall()` để tìm tất cả chuỗi con sử dụng `regex` (biểu thức tiêu chuẩn).

Code mẫu:

```python
import re
s = input()
print (re.findall("\d+",s))
```

### **Bài 61:**

Yêu cầu:

In chuỗi Unicode "`Hello world`".

Gợi ý:

- Sử dụng định dạng `u'string'` để định nghĩa chuỗi Unicode.

Code mẫu:

```python
unicodeString = u"Hello world!"
print (unicodeString)
```

### **Bài 62:**

Yêu cầu:

Viết chương trình để đọc chuỗi ASCII và chuyển đổi nó sang một chuỗi Unicode được mã hóa bằng UTF-8.

Gợi ý:

- Sử dụng hàm `encode()` để chuyển đổi.

Code mẫu:

```python
s = input()
v = s.encode() # có thể dùng v=s.encode('utf-8')
print (v)
```

### **Bài 63:**

Yêu cầu:

Viết comment đặc biệt để chỉ định file code nguồn Python ở Unicode.

Code mẫu:

```python
# -*- coding: utf-8 -*-
#Bài Python 63, https://o2.edu.vn/
```

### **Bài 64:**

Yêu cầu:

Viết một chương trình tính `1/2 + 2/3 + 3/4 + ... + n/(n + 1)` với một `n` là số nguyên dương được nhập vào từ bàn phím.

Ví dụ, nếu `n` là số sau đây được nhập vào:

`5`

Thì đầu ra phải là:

`3.55`

Gợi ý:

- Sử dụng `float()` để chuyển số nguyên sang số thập phân.

Code mẫu:

```python
n=int(input("Nhập số n >0: "))
sum=0.0
for i in range(1,n+1):
    sum += float(float(i)/(i+1))
print (sum)
```

### **Bài 65:**

Yêu cầu:

Viết chương trình tính: `f(n)=f(n-1)+100` khi `n>0` và `f(0)=1`, với `n` là số được nhập vào từ bàn phím.

Ví dụ: Nếu `n` được nhập vào là `5` thì đầu ra phải là `500`.

Gợi ý: Chúng ta có thể định nghĩa hàm đệ quy trong Python.
Code mẫu:

```python
def f(n):
    if n==0:
        return 0
    else:
        return f(n-1)+100
n=int(input("Nhập số n>0: "))
print (f(n))
```

### **Bài 66:**

Yêu cầu:

Dãy Fibonacci được tính dựa trên công thức sau:

- f(n)=0 nếu n=0

- f(n)=1 nếu n=1

- f(n)=f(n-1)+f(n-2) nếu n>1

Hãy viết chương trình tính giá trị của f(n) với n là số được người dùng nhập vào. Ví dụ: Nếu n được nhập vào là 7 thì đầu ra của chương trình sẽ là 13.

Code mẫu:

```python
def f(n):
    if n == 0: return 0
    elif n == 1: return 1
    else: return f(n-1)+f(n-2)
n=int(input("Nhập số n: "))
print (f(n))
```

### **Bài 67:**

Yêu cầu:

Dãy Fibonacci được tính dựa trên công thức sau:

- f(n)=0 nếu n=0
- f(n)=1 nếu n=1
- f(n)=f(n-1)+f(n-2) nếu n>1

Hãy viết chương trình sử dụng `list` `comprehension` để in dãy Fibonacci dưới dạng tách biệt bằng dấu `,`, `n` được người dùng nhập vào.

Ví dụ: Nếu `n` được nhập vào là `7` thì đầu ra của chương trình sẽ là: `0,1,1,2,3,5,8,13`

Code mẫu:

```python
def f(n):
    if n == 0: return 0
    elif n == 1: return 1
    else: return f(n-1)+f(n-2)
n=int(input("Nhập số n: "))
values = [str(f(x)) for x in range(0, n+1)]
print (",".join(values))
```

### **Bài 68:**

Yêu cầu:

Viết chương trình sử dụng `generator` để in số chẵn trong khoảng từ `0` đến `n`, cách nhau bởi dấu phẩy, `n` là số được nhập vào.

Ví dụ nếu `n=10` được nhập vào thì đầu ra của chương trình là: `0,2,4,6,8,10`

Gợi ý:

- Sử dụng `yield` để tạo ra giá trị kết tiếp trong `generator`.

Code mẫu:

```python
def EvenGenerator(n):
    i=0
    while i<=n:
        if i%2==0:
            yield i
        i+=1

n=int(input("Nhập n: "))
values = []
for i in EvenGenerator(n):
    values.append(str(i))

print ("Các số chẵn trong khoảng 0 và n là: ",",".join(values))
```

### **Bài 69:**

Yêu cầu:

Viết chương trình sử dụng generator để in số chia hết cho 5 và 7 giữa 0 và n, cách nhau bằng dấu phẩy, n được người dùng nhập vào.

Ví dụ: Nếu n=100 được nhập vào thì đầu ra của chương trình là: 0,35,70.

Gợi ý:

Như bài 68.

Code mẫu:

```python
def NumGenerator(n):
    for i in range(n+1):
        if i%5==0 and i%7==0:
            yield i
n=int(input("Nhập n: "))
values = []
for i in NumGenerator(n):
    values.append(str(i))

print ("Các số chia hết cho 5 và 7 trong khoảng 0 và n là: ",",".join(values))
```

### **Bài 70:**

Yêu cầu:

Viết các lệnh assert để xác minh rằng tất cả các số trong list [2,4,6,8] là chẵn.

Gợi ý:

- Sử dụng assert để khẳng định.

Code mẫu:

```python
li = [2,4,6,8]
for i in li:
 assert i%2==0
```

### **Bài 71:**

Yêu cầu:

Viết chương trình chấp nhận biểu thức toán học cơ bản do người dùng nhập vào từ bảng điều khiển và in kết quả ước lượng ra ngoài màn hình.

Ví dụ: Nếu chuỗi sau là đầu vào của chương trình:

35 + 3

thì đầu ra sẽ lả:

38

Gợi ý:

- Sử dụng eval() để ước lượng biểu thức

Code mẫu:

```python
expression = input("Nhập biểu thức cần tính: ")
print (eval(expression))
```

Mấy bài này khá đơn giản và kết quả đầu ra cũng dễ hình dung nên mình không chụp kết quả nữa nhé, code thì test trên Python 3.6.2 đảm bảo chạy ngon rồi.

### **Bài 72:**

Yêu cầu:

Viết hàm tìm kiếm nhị phân để tìm các item trong một list đã được sắp xếp. Hàm sẽ trả lại chỉ số của phần tử được tìm thấy trong list.

Gợi ý:

- Sử dụng if/elif để giải quyết các điều kiện.

Code mẫu:

```python
import math
def bin_search(li, element):
    bottom = 0
    top = len(li)-1
    index = -1
    while top>=bottom and index==-1:
        mid = int(math.floor((top+bottom)/2.0))
        if li[mid]==element:
            index = mid
        elif li[mid]>element:
            top = mid-1
        else:
            bottom = mid+1
    return index
li=[2,5,7,9,11,17,222]
print (bin_search(li,11))
print (bin_search(li,12))
```

Khi chạy code trên ta sẽ có kết quả đầu ra là 4 và -1, 4 là vị trí của 11 trong list li, và -1 nói lên rằng không có số 12 trong list li.

### **Bài 73:**

Yêu cầu:

Tạo một số thập phân ngẫu nhiên, có giá trị nằm trong khoảng từ 10 đến 100 bằng cách sử dụng module math của Python.

Gợi ý:

- Sử dụng random.random() để tạo float ngẫu nhiên trong [0,1].

Code mẫu:

```python
import random
print (random.random()*100)
```

Vì hàm trên được sử dụng để tạo số thập phân ngẫu nhiên, nằm trong khoảng từ 10 đến 100, nên mỗi lần bạn chạy code sẽ cho ra một kết quả khác nhau, là các số thập phân ngẫu nhiên thỏa mãn điều kiện nằm trong khoảng 10 đến 100.

### **Bài 74:**

Yêu cầu:

Tạo một số thập phân ngẫu nhiên, có giá trị nằm trong khoảng 5 đến 95, sử dụng module math của Python.

Gợi ý:

- Giống bài 73.

Code mẫu:

```python
import random
print (random.random()*100-5)
```

Code bài 73, 74 mình thấy chưa chuẩn lắm, mong nhận được góp ý của các bạn ở phần bình luận nhé!

### **Bài 75:**

Yêu cầu:

Viết chương trình xuất ra một số chẵn ngẫu nhiên trong khoảng 0 đến 10 (bao gồm cả 0 và 10), sử dụng module random và list comprehension.

Gợi ý:

- Sử dụng random.choice() để tạo một phần tử ngẫu nhiên từ list.

Code mẫu:

```python
import random
print (random.choice([i for i in range(11) if i%2==0]))
```

### **Bài 76:**

Yêu cầu:

Vui lòng viết chương trình để xuất một số ngẫu nhiên, chia hết cho 5 và 7, từ 0 đến 200 (gồm cả 0 và 200), sử dụng module random và list comprehension.

Gợi ý:

- Giống bài 75.

Code mẫu:

```python
import random
print (random.choice([i for i in range(201) if i%5==0 and i%7==0]))
```

Khi chạy code trên, bạn sẽ nhận được kết quả đầu ra là số bất kỳ, nằm trong đoạn [0;200] chia hết cho cả 5 và 7.

### **Bài 77:**

Yêu cầu:

Vui lòng viết chương trình để tạo một list với 5 số ngẫu nhiên từ 100 đến 200.

Gợi ý:

- Sử dụng random.sample() để tạo list chứa các giá trị ngẫu nhiên.

Code mẫu:

```python
import random
print (random.sample(range(100,201), 5))
```

Khi chạy code trên bạn sẽ nhận được 1 list, có 5 giá trị ngẫu nhiên, nằm trong đoạn [100;200]. Nếu đề bài yêu cầu số ngẫu nhiên nằm trong đoạn [0;100] thì range() trong đoạn trên bạn chỉ cần viết là range(100).

### **Bài 78:**

Yêu cầu:

Viết chương trình tạo ngẫu nhiên list gồm 5 số chẵn nằm trong đoạn [100;200].

Gợi ý:

- Giống bài 77.

Code mẫu:

```python
import random
print (random.sample([i for i in range(100,201) if i%2==0], 5))
```

### **Bài 79:**

Yêu cầu:

Viết chương trình để tạo ngẫu nhiên một list gồm 5 số, chia hết cho 5 và 7, nằm trong đoạn [1;1000].

Gợi ý:

- Giống bài 77, 78.

Code mẫu:

```python
import random
print (random.sample([i for i in range(1,1001) if i%5==0 and i%7==0], 5))
```

### **Bài 80:**

Yêu cầu:

Viết chương trình để in một số nguyên ngẫu nhiên từ 7 đến 15.

Gợi ý:

- Sử dụng random.randrange() để lấy số nguyên ngẫu nhiên trong một phạm vi nhất định.

Code mẫu:

```python
import random
print (random.randrange(7,16))
```

### **Bài 81:**

Yêu cầu:

Viết chương trình để nén và giải nén string "hello world!hello world!hello world!hello world!".

Gợi ý:

- Sử dụng zlib.compress() và zlib.decompress() để nén và giải nén string.

Code mẫu:

Với Python 2, code mẫu sẽ như sau:

```python
import zlib
s = "hello world!hello world!hello world!hello world!"
t = zlib.compress(s)
print t
print zlib.decompress(t)
```

Tuy nhiên, trong Python 3, bạn phải gọi encode() và chỉ định kiểu mã hóa, giả sử là utf-8 thì yêu cầu trên sẽ được code như sau:

```python
import zlib
s = "hello world!hello world!hello world!hello world!"
t = zlib.compress(s.encode("utf-8"))
print (t)
print (zlib.decompress(t))
```

### **Bài 82:**

Yêu cầu:

Bạn hãy viết một chương trình để in thời gian thực thi (running time of execution) phép tính "1+1" 100 lần.

Gợi ý:

- Sử dụng timeit() để đo thời gian chạy

Code mẫu:

```python
from timeit import Timer
t = Timer("for i in range(100):1+1")
print (t.timeit())
```

Khi chạy code trên, bạn cần phải đợi để phép tính trên được thực hiện xong rồi chương trình mới in ra thời gian thực thi. Ban đầu khi mới chạy code, cảm giác như không có gì đang được thực thi.

### **Bài 83:**

Yêu cầu:

Viết chương trình để trộn và in list [3,6,7,8].

Gợi ý:

- Sử dụng shuffle() để trộn list.

Code mẫu:

```python
from random import shuffle
li = [3,6,7,8]

shuffle(li)
print (li)
```

Khi code được thực thi, mỗi lần chạy sẽ cho ra một list với thứ tự các số được trộn ngẫu nhiên.

### **Bài 84:**

Yêu cầu:

Viết một chương trình để tạo tất cả các câu có chủ ngữ nằm trong ["Anh","Em"], động từ nằm trong ["Chơi","Yêu"] và tân ngữ là ["Bóng đá","Xếp hình"].

Gợi ý:

- Sử dụng list[index] để lấy phần tử từ list.

Code mẫu:

```python
chu_ngu=["Anh","Em"]
dong_tu=["Chơi","Yêu"]
tan_ngu=["Bóng đá","Xếp hình"]
for i in range(len(chu_ngu)):
    for j in range(len(dong_tu)):
        for k in range(len(tan_ngu)):
            cau = "%s %s %s." % (chu_ngu[i], dong_tu[j], tan_ngu[k])
            print (cau)
```

Khi chạy code trên ta sẽ có kết quả như sau:

```python
Anh Chơi Bóng đá.
Anh Chơi Xếp hình.
Anh Yêu Bóng đá.
Anh Yêu Xếp hình.
Em Chơi Bóng đá.
Em Chơi Xếp hình.
Em Yêu Bóng đá.
Em Yêu Xếp hình.
```

### **Bài 85:**

Yêu cầu:

Viết chương trình in list sau khi xóa các số chẵn trong [5,6,77,45,22,12,24].

Gợi ý:

- Sử dụng list comprehension để xóa một loạt phần tử của list.

Code mẫu:

```python
li = [5,6,77,45,22,12,24]
li = [x for x in li if x%2!=0]
print (li)
```

Kết quả khi chạy code trên sẽ là:

```python
[5, 77, 45]
```

### **Bài 86:**

Yêu cầu:

Sử dụng list comprehension để viết chương trình in list sau khi đã loại bỏ các số chia hết cho 5 và 7 trong [12,24,35,70,88,120,155].

Gợi ý:

- Giống bài 85.

Code mẫu:

```python
li = [12,24,35,70,88,120,155]
li = [i for i in li if i%5!=0 or i%7!=0]
print (li)
```

Ta sẽ có kết quả như sau:

```python
[12, 24, 88, 120, 155]
```

### **Bài 87:**

Yêu cầu:

Viết chương trình in list sau khi đã xóa số thứ 0, thứ 2, thứ 4, thứ 6 trong [12,24,35,70,88,120,155].

Gợi ý:

- Sử dụng list comprehension để xóa một loạt phần tử trong list.
- Sử dụng hàm enumerate() để lấy index, value của tuple.

Code mẫu:

```python
li = [12,24,35,70,88,120,155]
a= [x for i,x in enumerate(li)if i%2!=0]
print (a)
```

Code trên sẽ trả về kết quả:

```python
[24, 70, 120]
```

### **Bài 88:**

Yêu cầu:

Viết chương trình tạo mảng 3D 3*5*8 có mỗi phần tử là 0.

Gợi ý:

- Sử dụng list comprehension để tạo mảng.

Code mẫu:

```python
array = [[ [0 for col in range(8)] for col in range(5)] for row in range(3)]
print (array)
```

Kết quả:

```python
[[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]]
```

### **Bài 89:**

Yêu cầu:

Viết chương trình in list sau khi đã xóa số ở vị trí thứ 0, thứ 5, thứ 5 trong [12,24,35,70,88,120,155].

Gợi ý:

- Giống bài 87.

Code mẫu:

```python
li = [12,24,35,70,88,120,155]
li = [x for (i,x) in enumerate(li) if i not in (0,4,5)]
print (li)
```

Kết quả:

```python
[24, 35, 70, 155]
```

### **Bài 90:**

Yêu cầu:

Viết chương trình in list sau khi đã xóa giá trị 24 trong [12,24,35,24,88,120,155].

Gợi ý:

- Sử dụng phương thức xóa của list để xóa giá trị.

Code mẫu:

```python
li = [12,24,35,24,88,120,155]

li = [x for x in li if x!=24]
print (li)
```

Kết quả:

```python
[12, 35, 88, 120, 155]
```

### **Bài 91:**

Yêu cầu:

Với 2 list cho trước: [1,3,6,78,35,55] và [12,24,35,24,88,120,155], viết chương trình để tạo list có phần tử là giao của 2 list đã cho.

Gợi ý:

Sử dụng set() và "&=" để thiết lập điểm giao.

Code mẫu:

```python
list1=set([12,3,6,78,35,55,120])
list2=set([12,24,35,24,88,120,155])
list1 &= list2
li=list(list1)
print (li)
```

Kết quả:

```python
[120, 35, 12]
```

### **Bài 92:**

Yêu cầu:

Viết chương trình in list từ list [12,24,35,24,88,120,155,88,120,155], sau khi đã xóa hết các giá trị trùng nhau.

Gợi ý:

- Sử dụng set() để lưu trữ các giá trị không bị trùng lặp.

Code mẫu:

```python
def xoaTrung( li ):
    list_moi=[]
    xem = set()
    for i in li:
        if i not in xem:
            xem.add( i )
            list_moi.append(i)
              return list_moi

li=[12,12,15,24,35,35,24,88,120,155,88,120,155]
print ("List sau khi xóa giá trị trùng là:",xoaTrung(li))
```

Kết quả:

```python
List sau khi xóa giá trị trùng là: [12, 15, 24, 35, 88, 120, 155]
```

### **Bài 93:**

Yêu cầu:

Định nghĩa class Nguoi và 2 class con của nó: Nam, Nu. Tất cả các class có method "getGender" có thể in "Nam" cho class Nam và "Nữ" cho class Nu.

Gợi ý:

- Sử dụng Subclass(Parentclass) để định nghĩa 1 class con.

Code mẫu:

```python
class Nguoi(object):
    def getGender(self):
        return "Unknown"

class Nam(Nguoi):
    def getGender(self):
        return "Nam"
class Nu(Nguoi):
    def getGender(self):
        return "Nữ"

aNam = Nam()
aNu= Nu()
print (aNam.getGender())
print (aNu.getGender())
```

Kết quả:

```python
Nam
Nữ
```

### **Bài 94:**

Yêu cầu:

Viết chương trình đếm và in số ký tự của chuỗi do người dùng nhập vào.

Ví dụ:

Nếu chuỗi nhập vào là divin.dev thì đầu ra sẽ là:

d,2
i,2
v,1
n,1
e,1
.,1

Gợi ý:

- Sử dụng dict để lưu trữ các cặp key/value.
- Sử dụng dict.get() để tra cứu key với giá trị mặc định.

Code mẫu:

```python
dic = {}
chuoi=input("Nhập chuỗi cần đếm ký tự: ")
for c in chuoi:
    dic[c] = dic.get(c,0)+1
print ('\n'.join(['%s,%s' % (k, v) for k, v in dic.items()]))
```

### **Bài 95:**

Yêu cầu:

Viết chương trình nhận chuỗi đầu vào từ giao diện điều khiển và in nó theo thứ tự ngược lại.

Ví dụ nếu chuỗi nhập vào là:

*i love you*

Thì kết quả đầu ra là:

*uoy evol i*

Gợi ý:

- Sử dụng list[::-1] để lặp list theo thứ tự ngược lại.

Code mẫu:

```python
chuoi=input("Nhập chuỗi vào đây: ")
chuoi = chuoi[::-1]
print (chuoi)
```

### **Bài 96:**

Yêu cầu:

Viết chương trình nhận chuỗi do người dùng nhập vào và in các ký tự có chỉ số chẵn.

Ví dụ: Nếu chuỗi sau được nhập vào: d1i2v3i4n5.6d7e8v9, thì đầu ra sẽ là: divin.dev

Gợi ý:

- Sử dụng list[::2] để lặp list cách 2 vị trí.

Code mẫu:

```python
chuoi=input("Nhập chuỗi vào đây: ")
chuoi = chuoi[::2]
print (chuoi)
```

### **Bài 97:**

Yêu cầu:

Viết chương trình in tất cả các hoán vị của [1,2,3].

Gợi ý:

- Sử dụng itertools.permutations() để lấy hết các hoán vị của list.

Code mẫu:

```python
import itertools
print (list(itertools.permutations([1,2,3])))
```

Kết quả:

```python
[(1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1)]
```

### **Bài 98:**

Yêu cầu:

Viết chương trình để giải 1 câu đố cổ của Trung Quốc: Một trang trại thỏ và gà có 35 đầu, 94 chân, hỏi số thỏ và gà là bao nhiêu?

Gợi ý:

- Sử dụng vòng lặp for để lặp qua tất cả các giả thuyết có thể.

Code mẫu:

```python
def giai(dau,chan):
    klg='Không có dáp án phù hợp!'
    for i in range(dau+1):
        j=dau-i
        if 2*i+4*j==chan:
            return i,j
    return klg,klg
dau=35
chan=94
dap_an=giai(dau,chan)
print (dap_an)
```

Kết quả:

```python
(23, 12)
```
