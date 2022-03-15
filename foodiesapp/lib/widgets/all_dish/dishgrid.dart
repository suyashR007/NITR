import 'package:flutter/material.dart';
import 'package:foodiesapp/providers/dish_provider.dart';
import 'package:foodiesapp/widgets/all_dish/dishtile.dart';
import 'package:provider/provider.dart';

class DishGrid extends StatelessWidget {
  const DishGrid({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final dishData = Provider.of<Dish>(context);
    final dishes = dishData.items;
    return GridView.builder(
        itemCount: dishes.length,
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 2,
          mainAxisSpacing: 2,
        ),
        itemBuilder: (context, i) => ChangeNotifierProvider.value(
              value: dishes[i],
              child: const DishItems(),
            ));
  }
}
