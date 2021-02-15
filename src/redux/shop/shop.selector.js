import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectorCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectorCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectorCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
