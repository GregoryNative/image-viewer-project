// @flow
import * as React from 'react';
import { Share } from 'react-native';
import { connect } from 'react-redux';

import DetailView from '../../screens/DetailView';

import { fetchPictureDetails } from './actions';

import * as selectors from './selectors';

import Colors from '../../constants/Colors';

import type { HiResPicturesShape } from '../../types/store';

export interface Props {
  navigation: any;
  fetchPictureDetails: Function;
  isLoading: boolean;
  hiResPictures?: HiResPicturesShape;
}

class DetailViewContainer extends React.Component<Props> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.header,
    },
    headerTintColor: Colors.headerTitle,
  };

  componentDidMount() {
    const { navigation, fetchPictureDetails, hiResPictures } = this.props;
    const { pictureDetails } = navigation.state.params;

    if (!hiResPictures[pictureDetails.id]) {
      fetchPictureDetails(pictureDetails.id);
    }
  }

  share = (imageId: number): void => {
    const { pictureDetails } = this.props.navigation.state.params;
    const { hiResPictures } = this.props;
    const fullPictureDetails = hiResPictures[pictureDetails.id];

    if (!fullPictureDetails) {
      return;
    }

    Share.share({ message: fullPictureDetails.full_picture });
  };

  applyFilter = (type): void => {
    // TODO: implement apply image filter function
  };

  render() {
    const { pictureDetails } = this.props.navigation.state.params;
    const imageURL = pictureDetails.cropped_picture;
    const { isLoading, hiResPictures } = this.props;
    const fullPictureDetails = hiResPictures[pictureDetails.id];

    return (
      <DetailView
        imageUrl={fullPictureDetails?.full_picture || imageURL}
        pictureDetails={fullPictureDetails}
        shareCallback={this.share}
        isLoading={isLoading}
        applyFilterCallback={this.applyFilter}
      />
    );
  }
}

const mapStateToProps = state => ({
  hiResPictures: selectors.hiResPictures(state),
  isLoading: selectors.isLoading(state),
});

const mapDispatchToProps = {
  fetchPictureDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailViewContainer);
