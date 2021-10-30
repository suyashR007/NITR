import { API } from "../../backend";

export const getAllDishes = () => {
  return fetch(`${API}/dish/getAll`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getDishById = (dishId) => {
  return fetch(`${API}/dish/${dishId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
