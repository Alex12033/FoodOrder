import React from "react";

import { Card } from "../UI/Card";

import { MealItem } from "./MealItem/MealItem";

import style from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    img: "https://966.ua/upload/iblock/7cb/7cbba90980a50169fc9e7b41f2e76078.jpg",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    img: "https://us.123rf.com/450wm/boarding1now/boarding1now1503/boarding1now150300039/37090232-schnitzel-kotelett-schnitzel-mit-zitrone-und-petersilie-isoliert-auf-wei%C3%9Fem-hintergrund.jpg?ver=6",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    img: "https://api.gremio-grill.com.ua/uploads/products/1634253157923.png",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    img: "http://www.greenbowl.com.do/wp-content/uploads/2021/03/Mexican-Quinoa-Bowl.png",
  },
];

export const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img={meal.img}
    />
  ));
  return (
    <section className={style.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
