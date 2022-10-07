---
layout: post
title: How to Determine Screen Height and Width?
subtitle: Lấy kích thước (chiều rộng, chiều cao) của màn hình
categories: flutter
tags: [widget, flutter]
---
## Get Width and Height of a Widget
In Flutter, you can easily get the size of a specific widget after it’s rendered. What you need to do is to give it a key, then using that key to access currentContext.size property, like this:
```dart
// Full screen width and height
double width = MediaQuery.of(context).size.width;
double height = MediaQuery.of(context).size.height;

// Height (without SafeArea)
var padding = MediaQuery.of(context).padding;
double height1 = height - padding.top - padding.bottom;

// Height (without status bar)
double height2 = height - padding.top;

// Height (without status and toolbar)
double height3 = height - padding.top - kToolbarHeight;
        key: _key, 
        );
}
```
Hoặc có thể sử dụng thư viện `dart:ui`
```dart
import 'dart:ui';

window.physicalSize;
```