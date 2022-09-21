import { ADD_ITEM, INCREASE_AMOUNT, DECREASE_AMOUNT } from "../types";

const default_state = {
  total: 0,
  list: [],
};

const reducer = (state = default_state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_ITEM:
      const found = newState.list.find(
        (item) => item.id === action.payload.slug
      );
      if (!found) {
        const basketItem = {};
        basketItem.id = action.payload.slug;
        basketItem.price = action.payload.price;
        basketItem.label = action.payload.name;
        basketItem.amount = 1;
        newState.list.push(basketItem);
        newState.total = newState.total + action.payload.price;
      }
      return newState;
    case INCREASE_AMOUNT:
      newState.list.forEach((item) => {
        if (item.id === action.payload) {
          item.amount = item.amount + 1;
          newState.total = newState.total + item.price;
        }
      });
      return newState;
    case DECREASE_AMOUNT:
      newState.list.forEach((item) => {
        if (item.id === action.payload) {
          newState.total = newState.total - item.price;
          if (item.amount === 1) {
            const result = newState.list.filter(
              (item) => item.id !== action.payload
            );
            newState.list = result;
          } else {
            item.amount = item.amount - 1;
          }
        }
      });
      return newState;
    default:
      return state;
  }
};

export default reducer;
