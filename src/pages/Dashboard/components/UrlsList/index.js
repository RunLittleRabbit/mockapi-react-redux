import React from 'react';
import { array, bool } from 'prop-types';
import { Divider, List, Typography } from 'antd';
import './styles.css';
import Spinner from '../../../../components/Spinner';

const UrlsList = ({ urls, isLoading }) => (
  <div className="container-list">
    <Divider orientation="left">Urls list</Divider>
    {isLoading ? (
      <Spinner />
    ) : (
      <List
        bordered
        dataSource={urls[0]?.payload}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[URL]</Typography.Text> {item}
          </List.Item>
        )}
      />
    )}
  </div>
);
UrlsList.propTypes = {
  urls: array.isRequired,
  isLoading: bool.isRequired,
};
export default UrlsList;
