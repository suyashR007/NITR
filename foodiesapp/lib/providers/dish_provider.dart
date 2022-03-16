import 'package:flutter/material.dart';
import 'package:foodiesapp/models/dish.dart';

class Dish with ChangeNotifier {
  final List<DishItem> _items = [];

  List<DishItem> get items {
    return [..._items];
  }

  DishItem findDishByTitle(String id) {
    return _items.firstWhere((dish) => dish.id == id);
  }

  // Future<void> fetchAndSetProduct() async {
  //   final client = Dio();
  //   final url = 'https://foodiescalender-backend.herokuapp.com/api/dish/getAll';
  //   try {
  //     final response = await client.get(url);
  //     print(response.data);
  //     final List<DishItem> loadedDish = [];
  //     final extractedData = json.decode(response.data) as Map<String, dynamic>;
  //     extractedData.forEach((dishId, dishData) {
  //       loadedDish.add(DishItem(
  //         id: dishId,
  //         title: dishData['title'],
  //         recipe: dishData['recipe'],
  //         image: dishData['image'],
  //         category: dishData['category'],
  //         ingredients: dishData['ingredients'],
  //         schedule: dishData['schedule'],
  //       ));
  //     });
  //     _items = loadedDish;
  //     notifyListeners();
  //   } catch (err) {
  //     rethrow;
  //   }
  // }
}
