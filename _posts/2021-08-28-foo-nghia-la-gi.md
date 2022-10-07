---
layout: post
title: FOO nghĩa là gì?
subtitle: Khi xem các đoạn code minh hoạ, bạn thường gặp những từ như `foo` hoặc `bar`. Vậy foo nghĩa là gì?
categories: trick
tags: [misc, foo]
---

## FOO nghĩa là gì?

Foo (phát âm là FOO) là một thuật ngữ được các lập trình viên sử dụng cho tên biến, tên hàm; tương tự như cách gọi một số là `a,b,c` hoặc `x,y,z` trong Toán học . 

Foo và những từ tương tự (thường gặp nữa là từ bar) được chính thức gọi là biến metasyntactic. Có thể hữu ích khi sử dụng các biến metasyntactic khi code minh hoạ mẫu vì lập trình viên không mất thời gian suy nghĩ đặt tên như thế nào? Các tên vô nghĩa này giúp bạn dễ dàng tập trung hơn vào khái niệm cốt lõi và mục tiêu chức năng của mã hơn là tập trung vào các tên gọi.

Ví dụ, khi minh hoạ một hàm với 2 tham số thì bạn có thể không cần mất thời gian vào việc suy nghĩ đặt tên của hàm viết như thế nào, mà chỉ đơn giản viết như sau:

```dart
foo (arg1, arg2){
    //your code;
}
```

## Một số lựa chọn thay thế cho FOO

Bản thân thuật ngữ *foo* không phải là duy nhất đối với thế giới lập trình. Tuy nhiên, nguồn gốc thực sự của từ này có vẻ không rõ ràng. Eric Raymond, tác giả của *New Hacker Dictionary*, nhận xét rằng trong truyện tranh của Bill Holman thời 1930-50, "Smokey Stover", các chữ cái "FOO" thường xuất hiện, không giải thích được. 

Ngoài "foo" thì "bar" cũng thường được sử dụng như các biến metasyntactic đi cùng với nhau, như trong ví dụ bên dưới:

```dart
int max (int foo, int bar){
    int result;
    if (foo > bar)
        result = foo;
    else result = bar;
    return result;
}
```

Mặc dù *foo* được coi là một biến metasyntactic kinh điển, Raymond lưu ý rằng những tên biến này có thể thay đổi tùy theo các quốc giá khác nhau. Anh ấy liệt kê các từ như *qux*, *waldo*, *fred*, *xyzzy* và *thud* trong số những cụm từ khác mà đôi khi được sử dụng. *Fred*, *barney* và **wombat** có vẻ phổ biến ở Anh, trong khi *toto*, *tata*, *titi* và *tutu* được người Pháp sử dụng. *Blarg* và *wibble* thường được sử dụng ở New Zealand.
