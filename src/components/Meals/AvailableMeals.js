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
    img: "https://makkam.ru/d/burger_barbekyu_briosh_01.png",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    img: "https://previews.123rf.com/images/baibaz/baibaz2001/baibaz200100016/138828046-bowl-of-healthy-vegetable-salad-isolated-on-white-background-top-view.jpg",
  },
  {
    id: "m5",
    name: "Stake",
    description: "Finest and veggies",
    price: 45.99,
    img: "https://media.istockphoto.com/photos/grilled-beef-steak-picture-id1143123970?k=20&m=1143123970&s=612x612&w=0&h=o_Ah18y0tWifqEFhbI-hz9PZzc2zBv9lCb6NBFBccL8=",
  },
  {
    id: "m6",
    name: "Soup",
    description: "Special delicious soup",
    price: 17.5,
    img: "https://t3.ftcdn.net/jpg/02/25/17/90/360_F_225179072_SRzM0tDpnTouWr4nXbGeviBqB3mWwYnE.jpg",
  },
  {
    id: "m7",
    name: "Super Tako",
    description: "Mexican, raw, meaty",
    price: 90.99,
    img: "https://img.freepik.com/free-photo/tacos-with-meat-vegetables-isolated-white-background_1339-46295.jpg",
  },
  {
    id: "m8",
    name: "Salad Greek",
    description: "Healthy...and green...",
    price: 13.99,
    img: "https://media.istockphoto.com/photos/greek-salad-picture-id529980296?k=20&m=529980296&s=612x612&w=0&h=6P1RyWNNdeEAkiYIKnzLgezoz788zNeyzgf67dBT9BA=",
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
