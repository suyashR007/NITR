import 'package:flutter/material.dart';
import 'package:foodiesapp/models/dish.dart';
import 'package:provider/provider.dart';

class DishItems extends StatelessWidget {
  const DishItems({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final dish = Provider.of<DishItem>(context, listen: false);
    return GridTile(
      child: GestureDetector(
        onTap: () {},
        child: Image.network(
          dish.image,
          fit: BoxFit.fill,
        ),
      ),
      footer: Text(dish.title),
    );
  }
}
