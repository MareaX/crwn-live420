import SHOP_DATA from "./shop.data";

import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  error: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};

export default shopReducer;