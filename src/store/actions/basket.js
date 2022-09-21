import { ADD_ITEM, INCREASE_AMOUNT, DECREASE_AMOUNT } from "../types";

export const addItem = (data) => {
  return {
    type: ADD_ITEM,
    payload: data,
  };
};

export const increaseAmount = (data) => {
  return {
    type: INCREASE_AMOUNT,
    payload: data,
  };
};

export const decreaseAmount = (data) => {
  return {
    type: DECREASE_AMOUNT,
    payload: data,
  };
};
