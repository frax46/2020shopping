import { CREATE_ORDER, CLEAR_ORDER } from "../types";

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { order: action.payload };
    case CLEAR_ORDER:
      return { oder: null };
    default:
      return state;
  }
};
