---
layout: post
title: Shrink Wrap Property trong Flutter là gì?
subtitle: Thuộc tính Shrink Wrap của ListView, GridView... trong Flutter có tác dụng gì
categories: dart flutter
tags: [dart, flutter, shrinkWrap]
---

Các widget như **ListView, GridView** có một thuộc tính là **Shrink Wrap** gây khó hiểu cho nhiều bạn mới học Flutter.

## Shrink Wrap Property trong Flutter là gì?

Thông thường, một **ListView, GridView, PageView** hoặc **CustomScrollView** cố gắng để chiếm nhiều không gian nhất (theo chiều cuộn `scrollDirection`) của có thể từ các wigdet cha (parent), cho dù bản thân chúng cần ít không gian hơn thế.

Hãy xem ví dụ sau:

```
import 'package:flutter/material.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(),
        body: Center(
          child: Container(
            margin: EdgeInsets.all(32),
            decoration: BoxDecoration(border: Border.all(color: Colors.red)),
            child: ListView(
              shrinkWrap: false,
              children: <Widget>[
                ListTile(title: Text('Item 1')),
                ListTile(title: Text('Item 2')),
                ListTile(title: Text('Item 3')),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
```

Nếu thuộc tính `shrinkWrap` có giá trị `false` (đây là giá trị mặc định) thì kết quả sẽ như hình sau:

<img src="https://divin.dev/assets/images/image-20210830104520834.png" alt="image-20210830104520834" style="zoom:50%;" />

Nếu thuộc tính `shrinkWrap` có giá trị `true` thì kết quả sẽ như hình sau:

<img src="https://divin.dev/assets/images/image-20210830104938353.png" alt="image-20210830104938353" style="zoom:67%;" />

Tóm lại, một **ScrollView’s scrollDirection** có thể có hai kích thước.

- Lấy kích thước như widget cha.
- Lấy kích thước của các widget con (children)

Nếu thuộc tính `shrinkWrap` của ScrollView là `false` thì kích thước cuộn của `ScrollView` có cùng kích thước như widget cha.

Nếu thuộc tính `shrinkWrap` của ScrollView là `true` thì kích thước cuộn của `ScrollView` có cùng kích thước như widget con.

Bài viết tham khảo từ [What Does the Shrink Wrap Property Does In Flutter ?? - Flutter Agency](https://flutteragency.com/what-does-the-shrink-wrap-property-does/)
