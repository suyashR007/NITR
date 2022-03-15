import 'package:flutter/material.dart';
import 'package:foodiesapp/providers/dish_provider.dart';
import 'package:foodiesapp/screens/all_products.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => Dish()),
      ],
      child: const MaterialApp(
        home: AllProducts(),
      ),
    );
  }
}
