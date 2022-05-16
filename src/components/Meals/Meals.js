import React, { Fragment } from "react";

import { MealsSummary } from "./MealsSummary";
import { AvailableMeals } from "./AvailableMeals";

export const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};
