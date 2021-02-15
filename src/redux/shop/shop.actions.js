import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionError = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  error: error,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch((error) => {
        dispatch(fetchCollectionError(error));
      });
  };
};
