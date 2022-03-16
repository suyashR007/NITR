import 'package:flutter/material.dart';
import 'package:foodiesapp/Dio/dio_client.dart';
import 'package:foodiesapp/models/dish.dart';

class AllProducts extends StatefulWidget {
  const AllProducts({Key? key}) : super(key: key);

  @override
  State<AllProducts> createState() => _AllProductsState();
}

class _AllProductsState extends State<AllProducts> {
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    //Provider.of<Dish>(context).fetchAndSetProduct();
  }

  @override
  Widget build(BuildContext context) {
    DioClient _client = DioClient();
    return Scaffold(
      appBar: AppBar(
        title: const Text('All Dishes'),
      ),
      body: FutureBuilder(
        future: _client.getDish(),
        builder: (context, snapshot) {
          DishItem dishData = snapshot.data;
          return const CircularProgressIndicator();
        },
      ),
    );
  }
}
