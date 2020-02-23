// @flow
import {
  PICTURES_FETCH_REQUESTED,
  PICTURES_REFRESH_REQUESTED,
  PICTURES_FETCH_SUCCESS,
  PICTURES_FETCH_FAILED,
} from './actions';

import type { HomeReducer } from '../../types/store';

const initialState: HomeReducer = {
  pictures: [],
  isLoading: false,
  isRefreshing: false,
  hasMore: true,
  page: 1,
  errorMessage: '',
};

export default function(state: HomeReducer = initialState, action: any) {
  switch (action.type) {
    case PICTURES_FETCH_REQUESTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PICTURES_REFRESH_REQUESTED: {
      return {
        ...state,
        isRefreshing: true,
      };
    }
    case PICTURES_FETCH_SUCCESS: {
      return {
        ...state,
        pictures: action.payload.pictures,
        page: action.payload.page,
        hasMore: action.payload.hasMore,
        isLoading: false,
        isRefreshing: false,
      };
    }
    case PICTURES_FETCH_FAILED: {
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
}
