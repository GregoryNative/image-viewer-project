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
export const PICTURES_REFRESH_REQUESTED = 'PICTURES_REFRESH_REQUESTED';
export const PICTURES_FETCH_SUCCESS = 'PICTURES_FETCH_SUCCESS';
export const PICTURES_FETCH_FAILED = 'PICTURES_FETCH_FAILED';

export function listIsLoading(): ActionWithoutPayload {
  return {
    type: PICTURES_FETCH_REQUESTED,
  };
}

export function listIsRefreshing(): ActionWithoutPayload {
  return {
    type: PICTURES_REFRESH_REQUESTED,
  };
}

type FetchListSuccessPayload = {
  pictures: Array<Picture>,
  page: number,
  hasMore: boolean,
};
export function fetchListSuccess(
  pictures: Array<Picture>,
  page: number,
  hasMore: boolean,
): ActionWithPayload<FetchListSuccessPayload> {
  return {
    type: PICTURES_FETCH_SUCCESS,
    payload: { pictures, page, hasMore },
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

export function fetchPictures(isRefresh: ?boolean = false) {
  return async (dispatch: Dispatch, getState: GetState) => {
    try {
      const state = getState();
      const pictures = selectors.pictures(state);
      const pageToFetch = selectors.page(state);

      if (isRefresh) {
        dispatch(listIsRefreshing());
      } else {
        dispatch(listIsLoading());
      }

      const response = await getPictures(isRefresh ? 1 : pageToFetch);

      const { hasMore, pictures: responsePictures, page } = response;

      const nextPictures = isRefresh
        ? responsePictures
        : pictures.concat(responsePictures);
      const nextPage = page + 1;

      dispatch(fetchListSuccess(nextPictures, nextPage, hasMore));
    } catch (error) {
      dispatch(fetchListFailed(error));
    }
  };
}
