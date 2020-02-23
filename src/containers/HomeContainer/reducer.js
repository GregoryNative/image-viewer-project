// @flow
import {
  PICTURES_FETCH_FAILED,
  PICTURES_FETCH_REQUESTED,
  PICTURES_FETCH_SUCCESS,
} from './actions';

import type { HomeReducer } from '../../types/store';

const initialState: HomeReducer = {
  pictures: [],
  isLoading: true,
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
    case PICTURES_FETCH_SUCCESS: {
      return {
        ...state,
        pictures: state.pictures.concat(action.payload.pictures),
        page: action.payload.page,
        isLoading: false,
      };
    }
    case PICTURES_FETCH_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
}
