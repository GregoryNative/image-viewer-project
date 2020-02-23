// @flow
import type { Picture, PictureDetails } from './pictures';

export type HomeReducer = {
  pictures: Array<Picture>,
  isLoading: boolean,
  isRefreshing: boolean,
  hasMore: boolean,
  page: number,
  errorMessage: string,
};

export type HiResPicturesShape = { [key: string]: PictureDetails };

export type DetailViewReducer = {
  hiResPictures: HiResPicturesShape,
  isLoading: boolean,
  errorMessage: string,
};

export type State = {
  homeReducer: HomeReducer,
  detailViewReducer: DetailViewReducer,
};

export type Dispatch = any;
export type GetState = () => State;
