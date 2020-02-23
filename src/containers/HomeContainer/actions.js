// @flow
import { getPictures } from '../../services/500pxAPI';

import type {
  ActionWithPayload,
  ActionWithoutPayload,
} from '../../types/actions';
import type { Picture } from '../../types/pictures';
import type { Dispatch, GetState } from '../../types/store';

import * as selectors from './selectors';

export const PICTURES_FETCH_REQUESTED = 'PICTURES_FETCH_REQUESTED';
export const PICTURES_FETCH_SUCCESS = 'PICTURES_FETCH_SUCCESS';
export const PICTURES_FETCH_FAILED = 'PICTURES_FETCH_FAILED';

export function listIsLoading(): ActionWithoutPayload {
  return {
    type: PICTURES_FETCH_REQUESTED,
  };
}

type FetchListSuccessPayload = { pictures: Array<Picture>, page: number };
export function fetchListSuccess(
  pictures: Array<Picture>,
  page: number,
): ActionWithPayload<FetchListSuccessPayload> {
  return {
    type: PICTURES_FETCH_SUCCESS,
    payload: { pictures, page },
  };
}

export function fetchListFailed(
  errorMessage: string,
): ActionWithPayload<string> {
  return {
    type: PICTURES_FETCH_FAILED,
    payload: errorMessage,
  };
}

export function fetchPictures() {
  return async (dispatch: Dispatch, getState: GetState) => {
    try {
      const state = getState();
      const pageToFetch = selectors.page(state);

      dispatch(listIsLoading());

      const response = await getPictures(pageToFetch);

      const { hasMore, pictures, page } = response;

      if (!hasMore) {
        return;
      }

      dispatch(fetchListSuccess(pictures, page));
    } catch (error) {
      dispatch(fetchListFailed(error));
    }
  };
}
