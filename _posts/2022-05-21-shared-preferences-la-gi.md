---
layout: post
title: Shared Preferences là gì?
subtitle: Shared Preferences là gì? Cách sử dụng Shared Preferences trong Flutter
categories: flutter
tags: [flutter, debug, dart]
---

# Shared Preferences là gì?

Shared Preferences là nơi bạn có thể lưu trữ các thông tin dưới dạng key-value được xây dựng sẵn trong hệ điều hành Android hoặc NUserDefault trong iOS

# Flutter shared_preferences plugin

shared_preferences là thư cho phép lưu trữ và lấy dữ liệu từ hệ điều hành một cách nhanh chóng mà không cần nhiều bước thiết đặt trung gian.

- **Ứng dụng:** sử dụng để lưu các thiết đặt ứng dụng, cài đặt của người dùng,...
- **Nhược điểm:** chỉ lưu trữ được những kiểu dữ liệu đơng giản như chuỗi kí tự, số và kiểu logic. Ngoài ra không nên sử dụng để lưu các dữ liệu nhạy cảm mà thay vào đó nên sử dụng thư viện **[flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage)**.

## Sử dụng thư viện

### Thêm shared_preferences vào pubspecs.yaml

```yaml
dependencies:
  cached_network_image: ^3.1.0
  cupertino_icons: ^1.0.3
  flutter:
    sdk: flutter
  flutter_slidable: ^0.6.0
  flutter_svg: ^0.22.0
  shared_preferences: ^2.0.8
```

### Thêm thư viện vào file

```dart
import 'package:shared_preferences/shared_preferences.dard
...

...
```

### Lấy SharedPreferences instance

lấy và phân tích SharedPreferences của app từ disk

```dart
final _prefs = SharedPreferences.getInstance()
```

Xóa tất cả dữ liệu trong bộ nhớ và trả về true

```dart
clear() → Future<bool>
get(String key) → Object?
// 

// Fetches the latest values from the host platform. [...]
remove(String key) → Future<bool>
// Removes an entry from persistent storage.
```

Lấy giá trị của key. Lưu ý phương thức này trả về Object mà không phải kiểu cụ thể

```dart
get(String key) → Object?
```

Trả về true nếu tồn tại key trong user preferences

```dart
containsKey(String key) → bool
```

Các phương thức sau sẽ lấy giá trị qua key và trả về dữ liệu với kiểu tương ứng, nếu giá trị trả về không phải kiểu trả về của phương thức sẽ báo lỗi

```dart
getBool(String key) → bool?
getDouble(String key) → double?
getInt(String key) → int?
getKeys() → Set<String>
getString(String key) → String?
getStringList(String key) → List<String>?
```

Các phương thức sau sẽ gắn giá trị qua key tương ứng và trả về dữ liệu với kiểu tương ứng và trả về chúng

```dart
setBool(String key, bool value) → Future<bool>
setDouble(String key, double value) → Future<bool>
setInt(String key, int value) → Future<bool>
setString(String key, String value) → Future<bool>
setStringList(String key, List<String> value) → Future<bool>
```

Trả về tất cả key

```dart
getKeys() → Set<String>
```

Xóa một entry trong bộ nhớ

```dart
remove(String key) → Future<bool>
```

Lấy dữ liệu mới nhất từ bộ nhớ

```dart
reload() → Future<void>
```