import 'package:dio/dio.dart';
import 'package:foodiesapp/models/dish.dart';

class DioClient {
  final Dio _dio = Dio();
  final baseUrl = 'https://foodiescalender-backend.herokuapp.com/';

  Future<DishItem> getDish() async {
    Response dishData = await _dio.get(baseUrl + 'api/dish/getAll');

    print('DishData: ${dishData.data}');
    DishItem dishItem = DishItem.fromJson(dishData.data);
    return dishItem;
  }
}
