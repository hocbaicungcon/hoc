---
layout: post
title: How can I add a border to a widget in Flutter?
subtitle: 
categories: flutter
tags: [flutter, debug, dart]
---

You can add the `Text` as a `child` to a `Container` that has a `BoxDecoration` with `border` property:

[![enter image description here](https://i.stack.imgur.com/CIrsP.png)](https://i.stack.imgur.com/CIrsP.png)

```dart
Container(
  margin: const EdgeInsets.all(15.0),
  padding: const EdgeInsets.all(3.0),
  decoration: BoxDecoration(
    border: Border.all(color: Colors.blueAccent)
  ),
  child: Text('My Awesome Border'),
)
```



**The best way is using BoxDecoration()**

Advantage

- You can set the **border** of a widget
- You can set the border **Color** or **Width**
- You can set a **Rounded corner** of a border
- You can add a **Shadow** of a widget

Disadvantage

- `BoxDecoration` only use with `Container` widget, so you want to wrap your widget in `Container()`

Example

```dart
    Container(
      margin: EdgeInsets.all(10),
      padding: EdgeInsets.all(10),
      alignment: Alignment.center,
      decoration: BoxDecoration(
        color: Colors.orange,
        border: Border.all(
            color: Colors.pink[800], // Set border color
            width: 3.0),   // Set border width
        borderRadius: BorderRadius.all(
            Radius.circular(10.0)), // Set rounded corner radius
        boxShadow: [BoxShadow(blurRadius: 10,color: Colors.black,offset: Offset(1,3))] // Make rounded corner of border
      ),
      child: Text("My demo styling"),
    )
```

[![Enter image description here](https://i.stack.imgur.com/zsOU7.png)](https://i.stack.imgur.com/zsOU7.png)
