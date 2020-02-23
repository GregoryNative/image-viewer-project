import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Image from 'react-native-fast-image';

import styles from '../styles';

type Props = {
  imageUrl: string,
  imageId: number,
  openPicture: Function,
  imageStyle: Object,
};

class ListItem extends React.PureComponent<Props> {
  render() {
    const { imageUrl, imageId, openPicture, imageStyle } = this.props;

    return (
      <TouchableOpacity
        onPress={() => openPicture(imageId)}
        style={styles.item}>
        <Image
          style={imageStyle}
          resizeMode="cover"
          source={{ uri: imageUrl }}
        />
      </TouchableOpacity>
    );
  }
}

export default ListItem;
