---
layout: post
title: Design Patterns là gì?
subtitle: Design Patterns là gì? Tại sao cần sử dụng Design Pattern, có những design patterns nào?
categories: algorithms
tags: [design patterns]
---

Năm 1994. trong cuốn sách **Design Patterns - Elements of Reusable Object-Oriented Software** của 4 tác giả Erich Gamma, Richard Helm, Ralph Johnson và John Vlissides (4 tác giải này thường được nhắc đến với tên Gang of Four - Bộ Tứ) đã giới thiệu các Design Patterns (mẫu thiết kế) chuẩn cho việc phát triển phần mềm.

<img src="https://divin.dev/assets/images/81gtKoapHFL.jpg" alt="img" style="zoom:50%;" />

# 1. Design Patterns là gì?

Design patterns là một kỹ thuật trong lập trình hướng đối tượng, là các giải pháp đã được tối ưu hóa và tạo thành các mẫu thiết kế chuẩn (khuân mẫu) nhằm tái sử dụng cho các vấn đề lập trình mà chúng ta gặp phải hàng ngày.

**Design pattern** không phải là một đoạn code cụ thể, mà nó là một khuân mẫu cho việc giải quyết các vấn đề thường gặp trong lập trình. Chẳng hạn, đối với lập trình web, **design pattern** thường thấy là MVC - tổ chức code thành 3 thành phần:

- **M**odel: Tầng làm việc với database;
- **C**ontroller: Tầng điều khiển logic;
- **V**iew: Tầng xử lý giao diện.

# 2. Tại sao phải sử dụng Design Patterns?

Design Patterns là tập hợp những giải pháp thiết kế đã được tối ưu hóa, đã được kiểm chứng để giải quyết các vấn đề trong kĩ thuật phần mềm.

- Cung cấp giải pháp ở dạng tổng quát, giúp tăng tốc độ phát triển phần mềm bằng cách đưa ra các mô hình test, mô hình phát triển đã qua kiểm nghiệm.
- Tái sử dụng mã lệnh, giúp cho dự án dễ bảo trì, nâng cấp và mở rộng; tránh được các vấn đề tiềm ẩn có thể gây ra những lỗi lớn.
- Giúp mã nguồn dễ đọc hơn, giúp cho các lập trình viên khác có thể hiểu nhanh chóng (có thể hiểu là tính communicate).  Khi mà tất cả đều thiết kế theo một chuẩn (khuân mẫu) đã được định sẵn thì việc làm việc nhóm trở nên dễ dàng hơn.
- Design pattern sẽ giúp giảm thời gian và công sức suy nghĩ ra các cách giải quyết cho những vấn đề đã có lời giải.

# 3. Phân loại Design Patterns

### 3.1. Creational Design Patterns (nhóm khởi tạo)

Nhóm này tập trung các pattern để giải quyết cho việc khởi tạo đối tượng một cách thông minh và khoa học. Nhóm này gồm 9 mẫu design là:

- Abstract Factory
- Builder
- Factory Method
- Multiton
- Pool
- Prototype
- Simple Factory
- **Singleton:** Tạo ra đối tượng sử dụng cho toàn chương trình và chỉ khởi tạo 1 lần 
- Static Factory

### 3.2. Structural Design Patterns (nhóm cấu trúc)

Nhóm này tập trung các pattern giải quyết các vấn đề liên quan tới cách tổ chức các lớp, đối tượng sao cho linh hoạt, ngăn nắp để dễ dàng thay đổi, hay mở rộng code sau này. Nhóm này gồm có 11 mẫu design là:

- Adapter/ Wrapper
- Bridge
- Composite
- Data Mapper
- Decorator
- Dependency Injection
- Facade
- Fluent Interface
- Flyweight
- Registry
- Proxy

### 3.3. Behavioral Design Patterns (nhóm hành vi)

Nhóm này tập trung các pattern giải quyết các vấn đề liên quan tới hành vi, sự phân công trách nhiệm giữa các đối tượng. Nhóm này gồm 12 mẫu là:

- Chain Of Responsibilities
- Command
- Iterator
- Mediator
- Memento
- Null Object
- Observer
- Specification
- State
- Strategy
- Template Method
- Visitor

### 3.4. Một số mẫu thiết kế mới

- 1.4.1 Delegation.
- Service Locator.
- Repository.
- Entity-Attribute-Value (EAV).

Chúng tôi sẽ lần lượt giới thiệu các mẫu thiết kế này, mời các bạn đón đọc.
