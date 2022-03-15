import 'package:flutter/material.dart';
import 'package:foodiesapp/providers/dish_provider.dart';
import 'package:provider/provider.dart';

class DishDetails extends StatefulWidget {
  const DishDetails({Key? key}) : super(key: key);

  @override
  State<DishDetails> createState() => _DishDetailsState();
}

class _DishDetailsState extends State<DishDetails> {
  @override
  Widget build(BuildContext context) {
    final dishtitle = ModalRoute.of(context)?.settings.arguments as String;
    final dishDetails = Provider.of<Dish>(context).findDishByTitle(dishtitle);
    return Scaffold(
      appBar: AppBar(
        title: Text(dishDetails.title),
      ),
      body: ListView(
        children: [
          SizedBox(
            height: 200,
            child: Image.network(
              dishDetails.image,
              fit: BoxFit.fill,
            ),
          ),
          Text(dishDetails.title),
          Text(dishDetails.schedule),
          Text(dishDetails.category),
          Text(dishDetails.ingredients),
          Text(dishDetails.recipe),
        ],
      ),
    );
  }
}
