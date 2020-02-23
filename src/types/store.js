// @flow
import type { Picture } from './pictures';

export type HomeReducer = {
  pictures: Array<Picture>,
  isLoading: boolean,
  page: number,
  errorMessage: string,
};

export type DetailViewReducer = {
  hiResPictures: Array<any>,
  isLoading: boolean,
};

export type State = {
  homeReducer: HomeReducer,
  detailViewReducer: DetailViewReducer,
};

export type Dispatch = any;
export type GetState = () => State;
