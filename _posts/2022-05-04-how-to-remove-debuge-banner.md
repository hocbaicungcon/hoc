---
layout: post
title: How can I remove the Flutter debug banner?
subtitle: 
categories: flutter
tags: [flutter, debug, dart]
---

On your `MaterialApp` set `debugShowCheckedModeBanner` to `false`.

```dart
MaterialApp(
  debugShowCheckedModeBanner: false,
)
```

Or, on your `CupertinoApp`:

```dart
CupertinoApp(
  debugShowCheckedModeBanner: false
)
```

The ***debug*** banner will also automatically be removed on release build. If you are using Android Studio then go to *Run* → *Flutter* → *Run 'main.dart' in Release mode*.
