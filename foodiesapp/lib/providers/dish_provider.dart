import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:foodiesapp/models/dish.dart';

class Dish with ChangeNotifier {
  List<DishItem> _items = [];

  List<DishItem> get items {
    return [..._items];
  }

  DishItem findDishByTitle(String title) {
    return _items.firstWhere((dish) => dish.title == title);
  }

  Future<void> fetchAndSetProduct() async {
    final client = Dio();
    final url = 'https://foodiescalender-backend.herokuapp.com/api/dish/getAll';
  }
}
