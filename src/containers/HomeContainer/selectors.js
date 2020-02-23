// @flow
import type { State } from '../../types/store';

export const pictures = (state: State) => state.homeReducer.pictures;
export const isLoading = (state: State) => state.homeReducer.isLoading;
export const isRefreshing = (state: State) => state.homeReducer.isRefreshing;
export const hasMore = (state: State) => state.homeReducer.hasMore;
export const page = (state: State) => state.homeReducer.page;
