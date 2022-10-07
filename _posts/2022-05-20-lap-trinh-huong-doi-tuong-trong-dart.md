---
layout: post
title: 4 tính chất của hướng đối tượng trong Dart?
subtitle: 
categories: flutter
tags: [flutter, debug, dart, class]
---

##4 tính chất của OOP

###Tính kế thừa

<aside>
💡 Dart sử dụng từ khóa `extends` để tạo ra một `class` mới kế thừa một class đã có sẵn.

</aside>

<aside>
💡 Class con sinh ra sẽ có (kế thừa) những thuộc tính và phương thức của class cha

</aside>

```dart
// base (parent) class
class Parent {
  // some props
  // some methods
}

// derived (child) class
class Child extends Parent {
  
}
```

##Các loại kế thừa

### Đơn kế thừa:

<aside>
💡 `class` con kế thừa 1 `class` cha

</aside>

```dart
// base class
class Parent {
  // some props
  // some methods
}

// derived class
class Child extends Parent {
  
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d5ece2b5-918f-40e4-a6ac-b856e6998d97/Untitled.png)

### Đa kế thừa:

<aside>
💡 `class` con có thể kế thừa nhiều `class` cha. ***Dart không hỗ trợ đa kế thừa***

</aside>

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b76cf38-6d1b-4a2b-8fa1-fad68482b24f/Untitled.png)

### Kế thừa đa cấp

<aside>
💡 `class` có thể kế thừa một `class`con khác

</aside>

```dart
// base class
class Parent {
  // some props
  // some methods
}

// derived class
class Child extends Parent {
  
}

// GrandChild is derived from Child,
// which is derived from another
// class (Parent)
class GrandChild extends Child {
  
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc516493-45d2-4bf9-8763-629dd700b1da/Untitled.png)

##‹ Kế thừa phân cấp

Nhiều `class` con kế thừa cùng một `class` cha

```dart
// base class
class Parent {
  // some props
  // some methods
}

// derived class
class Child1 extends Parent {
  
}

class Child2 extends Parent {
  
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bf5c3463-0da1-4cd8-996b-4169968cf59f/Untitled.png)

### Lưu ý

- `class` con chỉ kế thừa các thuộc tính và phương thức của `class` cha, không kế thừa constructor của `class` cha
- Dart không hỗ trợ đa kế thừa

### Từ khóa `super`

<aside>
💡 Từ khóa `super` refer đến lớp cha của lớp hiện tại. `super` có thể dùng để gọi các phương thức hoặc thuộc tính của class cha. Khi một instance của class con được khởi tạo, một instance của class cha cũng sẽ được tạo ra ngầm định và `super` refer đến instance cha đó.

</aside>

Lợi ích của `super`

- Truy cập đến các data member của class cha để phân biệt với data member của class con
- Tránh ghi đè lên phương thức của class cha
- Dùng để gọi các **parameterized constructor** của class cha

```dart
class Person {
  late String name;
  late int age;

  Person(this.name, this.age);
  void printInfo() {
    print(this.name);
    print(this.age);
  }
}

class Student extends Person {
  late int id;
  Student(String name, int age, int id)
      : this.id = id,
        super(name, age); // đến parameterized constructor của class cha

  @override
  void printInfo() {
    super.printInfo();
    print(this.id);
  }
}

void main() {
  var newPerson = new Person("Hung", 20);
  var newStudent = new Student("Hung", 21, 11);
  newPerson.printInfo();
  print("--------------");
  newStudent.printInfo();
}
```

## Tính đóng gói

<aside>
💡 Dart có 2 phạm vi truy cập dữ liệu là public và private. Để chỉ thị một thành phần là private, sử dụng kí tự gạch dưới "_" trước thành phần đó.

</aside>

```dart
class User {
  String name; // đây là thành phần public
  String _username; // đây là thành phần private
  String _password;

  User(this.name, this._username, this._password);
}
```

<aside>
💡 Dart privacy level chỉ ở mức thư viện, nghĩa là tất cả các hàm, hay lớp khác có thể truy cập dến mọi thành phần của class hiện tại, dù cho thành phần đó có được đánh dáu là private hay không.

</aside>

- Khi class User và main đặt trong cùng một file.

```dart
class User {
  String name;
  String _username;
  String _password;

  User(this.name, this._username, this._password);

  void _hashPassword() {
    print("password hashed >.<");
  }
}

void main() {
  var newUser = new User("Hung", "admin", "admin");
  newUser._username = "adminLOL"; // legal
  newUser._password = "adminLOL"; // legal

  newUser._hashPassword();
}
```

**Khi class User được đặt trong file user.dart và import vào file main.dart** 

```dart
// user.dart
class User {
  String name;
  String _username;
  String _password;

  User(this.name, this._username, this._password);

  void _hashPassword() {
    print("password hashed >.<");
  }
}
```

```dart
import 'user.dart';

void main() {
  var newUser = new User("Hung", "admin", "admin");
  newUser._username = "adminLOL"; // illegal
  newUser._password = "adminLOL"; // illegal

  newUser._hashPassword(); // illegal
}
```

##Tính đa hình

<aside>
💡 Một biến, một hàm hoặc một phương thức có thể tồn tại ở nhiều dạng khác nhau. Tức là nhiều hàm hoặc phương thức có thể cùng một tên nhưng chức năng thực sự của chúng lại khác nhau.
Tính đa hình được áp dụng khi phuơng thức  của lớp con muốn sử dụng phương thức cha cho một phương thức khác.

</aside>

```dart
class User {
  void printInfo() {
    print("This is a new User!");
  }
}

class Student extends User {
  @override 
  void printInfo() {
    print("This is not just an user, but a student as well");
  }
}

void main() {
  var newUser = new User();
  newUser.printInfo(); // output: This is a new user!
  var newStudent = new Student();
  newStudent.printInfo(); // output: This is not just an user, but a student as well
}
```

###Lưu ý

<aside>
⚠️ Dart **chỉ hỗ trợ đa hình thời gian chạy (runtime polymorphism)** bằng việc sử dụng ghi đè phương thức

</aside>

<aside>
⚠️ Khi class con ghi đè một phương thức của class cha thì phương thức đó **phải có cùng tên, cùng tham số và cùng kiểu trả về** với phương thức của lớp cha

</aside>

<aside>
⚠️ Trong kế thừa đa cấp (multiple inheritence), các **phương thức ghi đè ở tầng dưới cùng** sẽ được thực hiện.

</aside>

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a777ec8b-9b38-4f41-8960-f4847c07f277/Untitled.png)

##Tính trừu tượng

<aside>
💡 Tính trừu tượng trong OOP là tính chất không thể hiện cụ thể mà chỉ nêu vấn đề, chỉ hiển thị tính năng thiết yếu mà không cần nói rõ quy trình hoạt động. Nói cách khác, tính trừu tượng chỉ cho biết thông tin đối tượng thay vì cách sử dụng nó như thế nào

</aside>

### Lớp trừu tượng (`abtract class`)

<aside>
💡 Là lớp chứa các các phương thức trừu tượng (abtract method). Trong abstract class, các phương thức có thể được khai báo mà không cần định nghĩa. Việc định nghĩa sẽ do các class con kế thừa nó đảm nhận.

</aside>

```dart
abstract class Animal {
  // define constructor and fields
  int _hands;
  String _type;
  String _name;
  int _children = 0;
  Animal(this._name, this._type, this._hands);

  void setName(String name);
}

class Dog extends Animal {
  Dog(String name, String type, int hands) : super(name, type, hands);
  void setChildren(int nChild) {
    this._children = nChild;
  }
}
```

##Interface

<aside>
💡 Mỗi class được định nghĩa đều ngầm định tạo ra một interface tương ứng. Để sử dụng một interface, khai báo class kèm theo từ khóa `implements` và tên interface.

</aside>

```dart
class Person {
  final String _name; // in the interface
  Person(this._name); // Not in the interface, since this is a constructor.
  // In the interface.
  String greet(String who) => 'Hello, $who. I am $_name.';
}

class Impostor implements Person {
  String get _name => '';
  String greet(String who) => 'Hi $who. Do you know who I am?';
}

String greetBob(Person person) => person.greet('Bob');

void main() {
  print(greetBob(Person('Kathy')));
  print(greetBob(Impostor()));
}
```

##Mixin

<aside>
💡 Với Dart thì Mixin là một lớp, nó không được sử dụng trực tiếp để tạo ra đối tượng, một Mixin chứa các phương thức, thuộc tính dùng để gộp vào một lớp khác.

</aside>

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/acfc9ad5-9d32-4757-9b82-b27e6ef6ea11/Untitled.png)

```dart
class Animal {}
class Mammal extends Animal{}
class Bird extends Animal{}
class Fish extends Animal {}

mixin Flyer {
  double? maxHeight;
  void fly() {
    print("Flies at $maxHeight");
  }
}

mixin Swimmer {
  double? maxDepth;

  void swim() {
    print("Swims at $maxDepth");
  }
}

mixin Walker on Mammal, Bird{
  //...
}

```

```dart
class Dolphin extends Mammal with Swimmer {
  Dolphin() {
    this.maxDepth = 100;
    this.swim();
  }
}

class Bat extends Mammal with Flyer {
  Bat() {
    this.maxHeight = 200;
    this.fly();
  }
}

class Duck extends Bird with Swimmer, Flyer , Walker{
  
}
```

<aside>
💡 Trong một số trường hợp, mixin yêu cầu lớp sử dụng nó phải kế thừa một lớp nhất định (Ví dụ: Các động vật là động vật có vú hoặc chim mới có khả năng di "đi trên cạn"). Chúng ta có thể chỉ thị hạn chế này bằng từ khóa `on`

</aside>
