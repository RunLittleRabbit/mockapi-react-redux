import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { func, bool, array } from 'prop-types';
import AddUrlsForm from './components/AddUrlsForm';
import { actions } from '../../redux/dashboard';
import { fetchingState, selectUrls } from '../../selectors/dashboard';
import UrlsList from './components/UrlsList';
import './styles.css';

const Dashboard = ({ urlsData, isLoading, getUrls, addUrls, updateUrls }) => {
  const onSubmit = ({ urls }) => {
    if (!urlsData.length) {
      addUrls(urls);
    } else {
      updateUrls({ id: urlsData[0].id, data: [...urlsData[0].payload, ...urls] });
    }
  };
  useEffect(() => {
    getUrls();
  }, []);
  return (
    <div className="container">
      <h1>Re-store project</h1>
      <AddUrlsForm onSubmit={onSubmit} />
      <UrlsList isLoading={isLoading} urls={urlsData} />
    </div>
  );
};

Dashboard.propTypes = {
  urlsData: array,
  isLoading: bool.isRequired,
  getUrls: func.isRequired,
  addUrls: func.isRequired,
  updateUrls: func.isRequired,
};

Dashboard.defaultProps = {
  urlsData: [],
};

const mapStateToProps = createStructuredSelector({
  urlsData: selectUrls,
  isLoading: fetchingState,
});

const mapDispatchToProps = (dispatch) => ({
  getUrls: () => dispatch(actions.getUrls.request()),
  addUrls: (data) => dispatch(actions.addUrl.request(data)),
  updateUrls: (data) => dispatch(actions.updateUrls.request(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
