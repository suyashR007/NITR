import 'package:json_annotation/json_annotation.dart';
import 'package:flutter/material.dart';

part 'dish.g.dart';

@JsonSerializable()
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

  factory DishItem.fromJson(Map<String, dynamic> json) =>
      _$DishItemFromJson(json);
  Map<String, dynamic> toJson() => _$DishItemToJson(this);
}
