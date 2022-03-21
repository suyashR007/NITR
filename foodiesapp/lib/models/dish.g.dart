// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'dish.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

DishItem _$DishItemFromJson(Map<String, dynamic> json) => DishItem(
      id: json['id'] as String,
      title: json['title'] as String,
      recipe: json['recipe'] as String,
      likes: json['likes'] as int,
      image: json['image'] as String,
      category: json['category'] as String,
      ingredients: json['ingredients'] as String,
      schedule: json['schedule'] as String,
    );

Map<String, dynamic> _$DishItemToJson(DishItem instance) => <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'recipe': instance.recipe,
      'likes': instance.likes,
      'image': instance.image,
      'category': instance.category,
      'ingredients': instance.ingredients,
      'schedule': instance.schedule,
    };
