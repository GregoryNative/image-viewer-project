// @flow
import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import HomeView from '../../screens/Home';

import { fetchPictures } from './actions';
import * as selectors from './selectors';

import Colors from '../../constants/Colors';

import type { Picture } from '../../types/pictures';

export interface Props {
  navigation: any;
  fetchPictures: Function;
  pictures: Array<Picture>;
  page: number;
  isLoading: boolean;
  isRefreshing: boolean;
  hasMore: boolean;
}

class HomeContainer extends React.Component<Props> {
  static navigationOptions = {
    title: 'Gallery App',
    headerStyle: {
      backgroundColor: Colors.header,
    },
    headerTintColor: Colors.headerTitle,
  };

  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content');
    Platform.OS === 'android' && StatusBar.setBackgroundColor(Colors.statusBar);
  }

  componentDidMount() {
    this.onLoadNext();
  }

  onRefresh = () => {
    const { isLoading, isRefreshing } = this.props;

    if (isLoading || isRefreshing) {
      return;
    }

    this.props.fetchPictures(true);
  };

  onLoadNext = () => {
    const { isLoading, isRefreshing, hasMore } = this.props;

    if (isLoading || isRefreshing || !hasMore) {
      return;
    }

    this.props.fetchPictures();
  };

  render() {
    return (
      <HomeView
        {...this.props}
        onRefresh={this.onRefresh}
        onLoadNext={this.onLoadNext}
      />
    );
  }
}

const mapStateToProps = state => ({
  pictures: selectors.pictures(state),
  page: selectors.page(state),
  isLoading: selectors.isLoading(state),
  isRefreshing: selectors.isRefreshing(state),
  hasMore: selectors.hasMore(state),
});

const mapDispatchToProps = {
  fetchPictures,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
