import 'package:flutter/material.dart';

class DishItem with ChangeNotifier {
  final String id;
  final String title;
  final String recipe;
  final String image;
  final String category;
  final String ingredients;
  final String schedule;

  DishItem({
    required this.id,
    required this.title,
    required this.recipe,
    required this.image,
    required this.category,
    required this.ingredients,
    required this.schedule,
  });
}
