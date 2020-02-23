// @flow
import type { State } from '../../types/store';

export const hiResPictures = (state: State) =>
  state.detailViewReducer.hiResPictures;
export const isLoading = (state: State) => state.detailViewReducer.isLoading;
