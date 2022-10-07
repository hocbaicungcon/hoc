---
layout: post
title: Asynchronous Programming trong Dart
subtitle: Lập trình bất đồng bộ Asynchronous Programming trong Dart Flutter
categories: flutter
tags: [flutter, debug, dart]
---

# Dart - Asynchronous Programming

Lập trình bất đồng bộ cho phép chương trình làm việc trong khi đợi các hành động khác hoàn thành. Một số ví dụ sử dụng lập trình bất đồng bộ

- Lấy dữ liệu qua mạng
- Các thao tác xử lí trong cơ sở dữ liêu
- Đọc/ghi dữ liệu trong file.

Trong Dart, để xử lí bất đồng bộ, ta có thể sử dụng một trong hai cách:

- Sử dụng`await`, `async` với lớp `Future`
- Sử dụng Future APIs

# Sử dụng `asycn`, `await`

## Future là gì?

> *An object representing a delayed computation.*
> 

`Future` là đối tượng được trả về của một hàm (phương thức) bất đồng bộ. Future có hai trạng thái: **hoàn thành** và **chưa hoàn thành.**

### Chưa hoàn thành

Khi gọi một hàm bất đồng bộ, nó trả về một Future chưa hoàn thành. Future này đợi đến khi hàm đó xử lí xong, sau đó trả về giá trị hoặc lỗi.

/heading

```dart
String createOrderMessage() {
  var order = fetchUserOrder();
  return 'Your order is: $order';
}

Future<String> fetchUserOrder() =>
    // Imagine that this function is more complex and slow.
    Future.delayed(
      const Duration(seconds: 2),
      () => 'Large Latte',
    );

void main() {
  print(createOrderMessage()); // output: Your order is: Future<T>
}
```

### Hoàn thành

Nếu hàm bất đồng bộ xử lí thành công, future sẽ hoàn thành với một giá trị, ngược lại nó hoàn thành với một lỗi.

```dart
Future<void> fetchUserOrder() {
// Imagine that this function is fetching user info
// and successfully done
  return Future.delayed(const Duration(seconds: 2),
      () => print("User order is...");
}

void main() async {
  fetchUserOrder();
  print('Fetching user order...');
}
```

```dart
Future<void> fetchUserOrder() {
// Imagine that this function is fetching user info
// but encounters a bug
  return Future.delayed(const Duration(seconds: 2),
      () => throw Exception('Logout failed: invalid ID'));
}

void main() asycn {
  fetchUserOrder();
  print('Fetching user order...');
}
```

## Làm việc với Future: async và await

Để định nghĩa một hàm bất đồng bộ, sử dụng từ khóa `async` trước thân hàm

```dart
void printHelloMessage() async =>
  Future.delayed(const Duration(seconds: 2), () => print("Hello"));
```

Nếu hàm trả về một giá trị kiểu T, ta phải định nghĩa kiểu trả về của hàm đó là `Future<T>`

```dart
Future<String> createHelloMessage() async =>
    Future.delayed(const Duration(seconds: 2), () => "hello");
```

Để lấy giá trị trả về của Future, ta dùng `await`, tuy nhiên `await` phải được đặt trong hàm `async`. Khi một hàm async được gọi, các code sẽ được thực thi đồng bộ cho đến khi gặp `await`, đợi khi Future trả về giá trị rồi mới thực thi tiếp.

```dart
void main() async {
  await printHelloMessage();
  print("Hi");
}

// output:
// Hello
// Hi
```

```dart
void main() async {
  printHelloMessage();
  print("Hi");
}

// output:
// Hi
// Hello
```

## Xử lí lỗi với `try` - `catch`

```dart
Future<void> printOrderMessage() async {
  try {
    var order = await fetchUserOrder();
    print('Awaiting user order...');
    print(order);
  } catch (err) {
    print('Caught error: $err');
  }
}

Future<String> fetchUserOrder() {
  // Imagine that this function is more complex.
  var str = Future.delayed(
      const Duration(seconds: 4),
      () => throw 'Cannot locate user order');
  return str;
}

Future<void> main() async {
  await printOrderMessage();
}
```

# Sử dụng Future APIs

### Constructor

1. `Future<T>(computation)`
    
    Tạo ra một `Future<T>` object với kết quả là kết quả của hàm `computaion`
    
    ```dart
    var future = Future<String>(() => "Hello");
    // future is a Future object that completes
    // with the text "Hello" as a result
    ```
    
2. `Future<T>.delayed(Duration duration, FutureOr<T>)`
    
    Trả về một `FutureOr<T>` (một `Future<T>` hoặc một giá trị kiểu `T`), hoàn thành sau thời gian `durantion`
    
    ```dart
    var future = Future<String>.delay(Duration(seconds: 2), () => "Hello world");
    ```
    

### Method

1. ***Future<T>* `then(callback(T value), {onError: (error) => callbackError(error)})`**
    
    Gọi hàm callback() sau khi future hoàn thành, nếu gặp phải lỗi và tham số onError được truyền vào, thì sẽ gọi hàm callbackError,
    
    ```dart
    import 'dart:convert';
    import 'package:http/http.dart' as http;
    
    void main() {
      // http.get() method return a Future
      http
          .get(Uri.parse('https://api.dictionaryapi.dev/api/v2/entries/en/hello'))
          .then((res) => jsonDecode(res.body))
          .then((data) {
        print(data);
      });
      print("Fetching data...");
    }
    ```
    
2. ***Future<T>* `catchError(onError: callback(error)`**
    
    Phương thức này hoạt động giống như catch block khi sử dụng async - await. Nó trả về một Future, Future này khi hoàn thành trả về giá trị của Future gọi tới phương thức, hoặc gọi hàm callback nếu Future đó xảy ra lỗi.
    
    ```dart
    import 'dart:convert';
    import 'package:http/http.dart' as http;
    
    void main() {
      http
          .get(Uri.parse(
              'httpdadfas://api.dictionaryapi.dev/api/v2/entries/en/hello0')) 
          .then((res) => jsonDecode(res.body))
          .catchError((error) => print('bad request'));
      print('Fetching data...');
    }
    ```
    
    ### Static method
    
    1. ***Future<List<T>>*** `**wait(Iterable futures)**`
        
        ```dart
        import 'dart:math';
        
        Future<bool> myTypedFuture(int id, int duration) async {
          await Future.delayed(Duration(seconds: duration));
          print('Delay complete for Future $id');
          return true;
        }
        
        void runMultipleFutures() async {
          var futures = <Future>[];
          for (int i = 0; i < 5; i++) {
            futures.add(myTypedFuture(i, Random(i).nextInt(10)));
          }
          final restuls = await Future.wait(futures);
          print(restuls);
        }
        ```
        
    2. ***Future<T>* `any(Iterable features)`**
    3. **null `doWhile(FutureOr<T> action)`**