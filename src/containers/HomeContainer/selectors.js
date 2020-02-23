// @flow
import type { State } from '../../types/store';

export const pictures = (state: State) => state.homeReducer.pictures;
export const isLoading = (state: State) => state.homeReducer.isLoading;
export const page = (state: State) => state.homeReducer.page;
