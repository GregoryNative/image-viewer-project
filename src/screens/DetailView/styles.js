import { Dimensions, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const { width } = Dimensions.get('window');

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
    width: width * 0.9,
    height: width * 0.9,
  },
  backButton: {
    position: 'absolute',
    left: 5,
    top: 5,
  },
  spinner: {
    position: 'absolute',
  },
  detailView: {
    width,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: Colors.detailViewFooter,
    padding: 10,
  },
  detailViewDescription: {
    flex: 1,
  },
  detailViewAuthor: {
    fontSize: 26,
    color: '#fff',
  },
  detailViewCamera: {
    fontSize: 20,
    color: '#fff',
  },
  detailViewButtons: {
    flexDirection: 'row',
  },
  shareButton: {
    marginRight: 10,
  },
  detailViewImage: {
    width: 50,
    height: 50,
  },
});

export default styles;
