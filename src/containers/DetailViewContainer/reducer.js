// @flow
import {
  PICTURE_DETAILS_FETCH_REQUESTED,
  PICTURE_DETAILS_FETCH_SUCCESS,
  PICTURE_DETAILS_FETCH_FAILED,
} from './actions';

import type { DetailViewReducer } from '../../types/store';

const initialState: DetailViewReducer = {
  hiResPictures: {},
  isLoading: false,
  errorMessage: '',
};

export default function(
  state: DetailViewReducer = initialState,
  action: Object,
) {
  switch (action.type) {
    case PICTURE_DETAILS_FETCH_REQUESTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PICTURE_DETAILS_FETCH_SUCCESS: {
      return {
        ...state,
        hiResPictures: {
          ...state.hiResPictures,
          [action.payload.imageId]: action.payload.hiResImage,
        },
      };
    }
    case PICTURE_DETAILS_FETCH_FAILED: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
}
