---
layout: post
title: Get Width and Height of a Widget
subtitle: Lấy kích thước (chiều rộng, chiều cao) của một Widget
categories: flutter
tags: [widget, flutter]
---
## Get Width and Height of a Widget
In Flutter, you can easily get the size of a specific widget after it’s rendered. What you need to do is to give it a key, then using that key to access currentContext.size property, like this:
```dart
final _key = GlobalKey(); 

// This function is trggered somehow after build() called
void _getSize() {   
  final _size = _key.currentContext.size;
  final _width = _size.width; 
  final _height = _size.height;
}

Widget build(BuildContext context) {
    return Scaffold(
      child: SomeWidget(
        key: _key, 
        );
}
```