---
layout: post
title: Flutter For Dummies Cheat Sheet
subtitle: Tài liệu ngắn gọn về framework Flutter
categories: flutter
tags: [cheat sheet, flutter]
---
## A “Hello World” Dart Program

```dart
main() => print('Hello World');
```
## A “Hello World” Flutter Program

```dart
import 'package:flutter/material.dart';

main() => runApp(HelloApp());

class HelloApp extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Material(
        child: Text("Hello world!"),
      ),
    );
  }
}
```
## A Stateless Widget

```dart
import 'package:flutter/material.dart';

class Greeter extends StatelessWidget {
  Greeter({Key key @required this.name}) : super(key: key);

  final String name;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('Hello, $name'),
    );
  }
}
```

## A Stateful Widget

```dart
import 'package:flutter/material.dart';

class WidgetWithState extends StatefulWidget {
  @override
  _WidgetWithStateState createState() => _WidgetWithStateState();
}

class _WidgetWithStateState extends State<WidgetWithState> {
  int counter = 0;

  increment() {
    setState(() {
      counter++;
    });
  }

  decrement() {
    setState(() {
      counter--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        FlatButton(onPressed: increment, child: Text('Increment')),
        FlatButton(onPressed: decrement, child: Text('Decrement')),
        Text(counter.toString()),
      ],
    );
  }
}
```

## A Simple Scaffold

```dart
Scaffold(
  appBar: AppBar(
    title: Text("I'm aan AppBar."),
  ),
  body: Center(
    child: Text("I'm a Text widget."),
  ),
  floatingActionButton: FloatingActionButton(
    child: Icon(Icons.ac_unit),
  ),
  drawer: Drawer(
    child: Center(child: Text("I'm a drawer.")),
  ),
)
```
## A Cupertino App

```dart
import 'package:flutter/cupertino.dart';

void main() => runApp(CupterinoApp());

class CupterinoApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CupertinoApp(
      home: CupertinoPageScaffold(
        navigationBar: CupertinoNavigationBar(
          backgroundColor: Color.fromRGBO(66, 165, 245, 1.0),
          middle: Text("I'm a navigation bar"),
        ),
        child: Center(
          child: Text('Hello from Cupertino, Californa!'),
        ),
      ),
    );
  }
}
```
## A Column

```dart
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    Text("I'm on top."),
    Text("I'm in the middle."),
    Text("I'm the bottom."),
  ],
)
```
Responding to a Button Press
```dart
import 'package:flutter/material.dart';

void main() => runApp(ButtonDemo());

class ButtonDemo extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State {
  String _whatToDisplay;
  void initState() {
    _whatToDisplay = 'Click Me';
  }

  void _doSomething() {
    setState(() {
      _whatToDisplay = 'Thank you for clicking';
    });
  }

  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: RaisedButton(
          child: Text(_whatToDisplay),
          onPressed: _doSomething,
        ),
      ),
    );
  }
}
```
## Some Useful Layout Widgets

```dart
Material(
  child: SafeArea(
    child: Column(
      children: [
        Expanded(
          child: Container(
            height: 50.0,
            color: Colors.blue,
          ),
        ),
        SizedBox(
          height: 50.0,
        ),
        Container(
          alignment: Alignment.bottomRight,
          height: 100.0,
          color: Colors.blue,
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Text(
              'Hello',
              style: TextStyle(backgroundColor: Colors.red),
            ),
          ),
        ),
      ],
    ),
  ),
)
```
## A Text Field

```dart
class _MyHomePageState extends State {
  final _myController = TextEditingController();

  @override
  void dispose() {
    _myController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              decoration: InputDecoration(labelText: "Type something:"),
              controller: _myController,
            ),
            RaisedButton(
              child: Text("UPPERCASE"),
              onPressed: () =>
                  _myController.text = _myController.text.toUpperCase(),
            ),
          ],
        ),
      ),
    );
  }
}
```
## A Slider

```dart
class _MyHomePageState extends State {
  double _sliderValue = 1.0;

  void _refreshSlider(double newValue) {
    setState(() {
      _sliderValue = newValue;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(_sliderValue.toStringAsFixed(2)),
            Slider(
              value: _sliderValue,
              onChanged: _refreshSlider,
              min: 1.0,
              max: 10.0,
            )
          ],
        ),
      ),
    );
  }
}
```
## Radio Buttons

```dart
class _MyHomePageState extends State {
  int _radioValue;

  void _refreshRadio(int newValue) {
    setState(() {
      _radioValue = newValue;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(_radioValue?.toString() ?? 'Select One'),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text('0'),
                Radio(
                    value: 0,
                    groupValue: _radioValue,
                    onChanged: _refreshRadio),
                Text('1'),
                Radio(
                    value: 1,
                    groupValue: _radioValue,
                    onChanged: _refreshRadio),
                Text('2'),
                Radio(
                  value: 2,
                  groupValue: _radioValue,
                  onChanged: _refreshRadio,
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}
```
## Basic Navigation

```dart
class FirstPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Material(
      child: Center(
        child: RaisedButton(
          child: Text('Go to second page'),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => SecondPage(),
              ),
            );
          },
        ),
      ),
    );
  }
}

class SecondPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Material(
      child: Center(
        child: RaisedButton(
          onPressed: () {
            Navigator.pop(context);
          },
          child: Text('Go back!'),
        ),
      ),
    );
  }
}
```
## A List

```dart
List movieName = [
  "Casablanca",
  "Citizen Kane",
  "Lawrence of Arabia",
];

ListView.builder(
  itemCount: movieName.length,
  itemBuilder: (context, index) {
    return ListTile(
        title: Text(movieName[index]),
        onTap: () => _goToDetailPage(movieName[index]));
  },
)
Animation
class MyHomePageState extends State
    with SingleTickerProviderStateMixin {
  Animation animation;
  AnimationController controller;

  @override
  void initState() {
    super.initState();
    controller =
        AnimationController(duration: const Duration(seconds: 3), vsync: this);
    animation = Tween(begin: 100.0, end: 500.0).animate(controller)
      ..addListener(() {
        setState(() {});
      });
    controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Stack(
        children: [
          Positioned(
            left: 150.0,
            top: animation.value,
            child: Icon(
              Icons.music_note,
              size: 70.0,
            ),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }
}
```

## Trick and Tips

### Lock Orientation

```dart
import 'package:flutter/services.dart';

void main() async {
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
  ]);

  runApp(App());
}
```

### Hide Status Bar

```dart
import 'package:flutter/services.dart';

void main() {
    SystemChrome.setEnabledSystemUIOverlays([]);
}
```

### Check Platform

```dart
import 'dart:io' show Platform;

if (Platform.isIOS) {
  doSmthIOSSpecific();
}

if (Platform.isAndroid) {
  doSmthAndroidSpecific();
}
```

## Data Types

## List/Array

```dart
final length = items.length;

final newItems = items..addAll(otherItems);

final allEven = items.every((item) => item % 2 == 0);

final filled = List<int>.filled(3, 42);

final even = items.where((n) => n % 2 == 0).toList();

final found = items.firstWhere((item) => item.id == 42);

final index = items.indexWhere((item) => item.id == 42);

final flat = items.expand((_) => _).toList();

final mapped = items.expand((item) => [item + 1]).toList();

items.forEach((item) => print(item));

items.asMap().forEach((index, item) => print('$item, $index'));

final includes = items.contains(42);

final indexOf = items.indexOf(42);

final joined = items.join(',');

final newItems = items.map((item) => item + 1).toList();

final item = items.removeLast();

items.add(42);

final reduced = items.fold({}, (acc, item) {
  acc[item.id] = item;
  return acc;
});

final reversed = items.reversed;

items.removeAt(0);

final slice = items.sublist(15, 42);

final hasOdd = items.any((item) => item % 2 == 0);

items.sort((a, b) => a - b);

items.replaceRange(15, 42, [1, 2, 3]);

items.insert(0, 42);
```

## Class

### Singleton

```dart
class Singleton {
  static Singleton _instance;

  final int prop;

  factory Singleton() =>
    _instance ??= new Singleton._internal();

  Singleton._internal()
    : prop = 42;
}
```



## Json

```dart
import 'dart:convert' show json;

json.decode(someString);
json.encode(encodableObject);
```

`json.decode` returns a `dynamic` type, which is probably not very useful

You should describe each entity as a Dart class with `fromJson` and `toJson` methods

```dart
class User {
    String displayName;
    String photoUrl;

    User({this.displayName, this.photoUrl});

    User.fromJson(Map<String, dynamic> json)
      : displayName = json['displayName'],
        photoUrl = json['photoUrl'];

    Map<String, dynamic> toJson() {
      return {
        'displayName': displayName,
        'photoUrl': photoUrl,
      };
    }
}

final user = User.fromJson(json.decode(jsonString));
json.encode(user.toJson());
```

However this approach is error-prone (e.g. you can forget to update map key after class field was renamed), so you can use `json_serializable` as an alternative

Add `json_annotation`, `build_runner` and `json_serializable` to dependencies

```dart
dependencies:
  json_annotation: ^2.0.0

dev_dependencies:
  build_runner: ^1.0.0
  json_serializable: ^2.0.0
```

Update your code

```dart
import 'package:json_annotation/json_annotation.dart';

part 'user.g.dart';

@JsonSerializable()
class User {
  String displayName;
  String photoUrl;

  User({this.displayName this.photoUrl});

  // _$UserFromJson is generated and available in user.g.dart
  factory User.fromJson(Map<String, dynamic> json) {
    return _$UserFromJson(json);
  }

  // _$UserToJson is generated and available in user.g.dart
  Map<String, dynamic> toJson() => _$UserToJson(this);
}

final user = User.fromJson(json.decode(jsonString));
json.encode(user); // toJson is called by encode
```

Run `flutter packages pub run build_runner build` to generate serialization/deserialization code

To watch for changes run `flutter packages pub run build_runner watch`