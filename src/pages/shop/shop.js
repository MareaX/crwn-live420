import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionsPageContainer from "../collection/collection.container";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import { connect } from "react-redux";

const Shop = (props) => {
  useEffect(() => {
    const { fetchCollectionsStartAsync } = props;
    fetchCollectionsStartAsync();
  }, []);

  const { match } = props;
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
