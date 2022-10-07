---
layout: post
title: How to print() without a newline in Dart?
subtitle: 
categories: dart
tags: [dart, flutter]
---

# **print() without a newline in Dart?** 

You can use `stdout` in `dart:io` package:

```dart
import "dart:io";
stdout.write("foo");
```

will print `foo` to the console but not place a `\n` after it.
