import 'package:flutter/material.dart';
import 'package:foodiesapp/providers/dish_provider.dart';
import 'package:foodiesapp/widgets/all_dish/dishgrid.dart';
import 'package:provider/provider.dart';

class AllProducts extends StatefulWidget {
  const AllProducts({Key? key}) : super(key: key);

  @override
  State<AllProducts> createState() => _AllProductsState();
}

class _AllProductsState extends State<AllProducts> {
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    Provider.of<Dish>(context).fetchAndSetProduct();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('All Dishes'),
      ),
      body: const DishGrid(),
    );
  }
}
