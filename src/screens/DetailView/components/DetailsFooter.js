import * as React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from '../styles';
import imageFiltersImage from './images/ImageFilters.png';
import shareImage from './images/ShareThis.png';

type Props = {
  shareCallback: Function,
  colorSwitchCallback: Function,
  pictureDetails: Object,
};

class DetailsFooter extends React.PureComponent<Props> {
  render() {
    const { shareCallback, applyFilterCallback, pictureDetails } = this.props;

    if (!pictureDetails) {
      return null;
    }

    const imageId = pictureDetails.id;

    return (
      <View style={styles.detailView}>
        <View style={styles.detailViewDescription}>
          <Text style={styles.detailViewAuthor}>{pictureDetails.author}</Text>
          <Text style={styles.detailViewCamera}>{pictureDetails.camera}</Text>
        </View>
        <View style={styles.detailViewButtons}>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => applyFilterCallback()}>
            <Image
              style={styles.detailViewImage}
              resizeMode="cover"
              source={imageFiltersImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => shareCallback(imageId)}>
            <Image
              style={styles.detailViewImage}
              resizeMode="cover"
              source={shareImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DetailsFooter;
