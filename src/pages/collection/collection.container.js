import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selector";
import { compose } from "redux";

import WithSpinner from "../../components/with-spinner/with-spiner";
import CollectionsPage from "./collection";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsPage);

export default CollectionsPageContainer;
