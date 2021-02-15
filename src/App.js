import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Auth from "./pages/auth/auth";
import Checkout from "./pages/checkout/checkout";
import Home from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }));
        });
      }
      dispatch(setCurrentUser(userAuth));
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
        />
      </Switch>
    </>
  );
};

export default App;
