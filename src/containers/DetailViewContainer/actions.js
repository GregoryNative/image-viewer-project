// @flow

import { getPictureDetails } from '../../services/500pxAPI';
import type {
  ActionWithPayload,
  ActionWithoutPayload,
} from '../../types/actions';
import type { PictureDetails } from '../../types/pictures';
import type { Dispatch } from '../../types/store';

export const PICTURE_DETAILS_FETCH_REQUESTED =
  'PICTURE_DETAILS_FETCH_REQUESTED';
export const PICTURE_DETAILS_FETCH_SUCCESS = 'PICTURE_DETAILS_FETCH_SUCCESS';
export const PICTURE_DETAILS_FETCH_FAILED = 'PICTURE_DETAILS_FETCH_FAILED';

export function pictureIsLoading(): ActionWithoutPayload {
  return {
    type: PICTURE_DETAILS_FETCH_REQUESTED,
  };
}

type FetchPictureSuccessPayload = {
  imageId: number,
  hiResImage: PictureDetails,
};
export function fetchPictureSuccess(
  imageId: number,
  hiResImage: PictureDetails,
): ActionWithPayload<FetchPictureSuccessPayload> {
  return {
    type: PICTURE_DETAILS_FETCH_SUCCESS,
    payload: { imageId, hiResImage },
  };
}

export function fetchPictureFailed(
  errorMessage: string,
): ActionWithPayload<string> {
  return {
    type: PICTURE_DETAILS_FETCH_FAILED,
    payload: errorMessage,
  };
}

export function fetchPictureDetails(imageId: number) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(pictureIsLoading());

      const response = await getPictureDetails(imageId);

      dispatch(fetchPictureSuccess(imageId, response));
    } catch (error) {
      dispatch(fetchPictureFailed(error));
    }
  };
}
