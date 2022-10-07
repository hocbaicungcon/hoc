---
layout: post
title: Cách đặt tên trong ngôn ngữ Dart
subtitle: Quy ước khi đặt tên biến, tên hàm, tên lớp trong Dart
categories: dart flutter
tags: [dart, flutter]
---

Một chương trình sử dụng rất nhiều *tên* hay còn gọi là *định danh* để làm tên chương trình, tên hàm, tên biến, tên hằng số…

### Quy tắc bắt buộc khi đặt tên biến, tên hàm, tên lớp

- Tên trong Dart có độ dài tuỳ ý. Chúng có thể gồm cả chữ cái cả in hoa và in thường, các chữ số và dấu gạch dưới, nhưng bắt buộc phải bắt đầu bằng một chữ cái hoặc dấu gạch dưới. 
- Trong tên không được có dấu cách trắng hoặc các ký tự đặc biệt, ngoại trừ dấu gạch dưới `_` và dấu đô la `$`
- Tên không được trùng với các *từ khóa* của Dart.
- Tên bắt đầu với một ký tự gạch dưới `_`  được hiểu rằng đây là một định danh *private* (riêng tư)

### Quy tắc *nên* tuân thủ khi đặt tên trong Dart

- Chúng ta nên đặt tên sao cho có ý nghĩa và dễ đọc (ngăn cách bởi dấu `_` hoặc viết hoa đầu mỗi từ...)
- Ký tự bắt đầu của tên phải là một dấu gạch dưới `_` hoặc một chữ cái (có thể là chữ hoa hoặc chữ thường). Tiếp theo có thể là một hoặc nhiều ký tự, con số hoặc thậm chí bỏ trống (tức tên chỉ gồm một kí tự).
- Tên của lớp, enum, tham số thường được đặt tên theo kiểu `UpperCamelCase`, tức là bắt đầu bởi chữ cái in hoa, ví dụ `MyClass` hoặc `MyApp`
- Tên biến, hằng, object, hàm thường đặt theokiểu `lowerCamelCase`, tức là bắt đầu bằng chữ cái thường và viết hoa đầu mỗi từ tiếp theo, ví dụ `myVar` hoặc `tinhGiaiThua`
- Viết tắt khi tên trên 2 từ, lấy ký đầu viết HOA để tạo chữ viết tắt, ví dụ `IOStream`  hoặc `InputOutputStream`
