// @flow
import * as React from 'react';
import {
  FlatList,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';

import ListItem from './components/ListItem';

import styles from './styles';

import type { Props as ContainerProps } from '../../containers/HomeContainer';
import type { Picture } from '../../types/pictures';

const keyExtractor = (item, page, index) =>
  `${item.id.toString()}${page}${index}`;

type Props = ContainerProps & {
  onLoadNext: Function,
  onRefresh: Function,
};

class HomeView extends React.PureComponent<Props> {
  imageThumbnailStylePortrait = null;

  constructor(props: Props) {
    super(props);
    this._prepareStyles(); // create styles once to avoid object literals and use RN style optimization
  }

  _prepareStyles(): void {
    const { height, width } = Dimensions.get('window');
    const realWidth = height > width ? width : height;
    const portraitImageSize = realWidth / 2 - 10;

    this.imageThumbnailStylePortrait = StyleSheet.flatten({
      width: portraitImageSize,
      height: portraitImageSize,
    });
  }

  _openPicture = (imageId: number) => {
    const { pictures, navigation } = this.props;

    navigation.navigate('DetailView', {
      pictureDetails: pictures.find(pic => pic.id === imageId),
    });
  };

  _renderPicture = ({ item }: { item: Picture }) => {
    const imageURL = item.cropped_picture;
    const imageId = item.id;

    return (
      <ListItem
        imageUrl={imageURL}
        imageId={imageId}
        imageStyle={this.imageThumbnailStylePortrait}
        openPicture={this._openPicture}
      />
    );
  };

  // TODO: it would be great to see here some loader and non-flickering layout
  render() {
    const { isLoading, page, pictures, onLoadNext, onRefresh } = this.props;

    return (
      <View style={styles.page}>
        <FlatList
          removeClippedSubviews
          refreshing={isLoading}
          initialNumToRender={20}
          data={pictures}
          onRefresh={onRefresh}
          numColumns={2}
          renderItem={this._renderPicture}
          keyExtractor={(item, index) => keyExtractor(item, page, index)}
          onEndReached={onLoadNext}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  }
}

export default HomeView;
