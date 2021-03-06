// @flow
import type { Picture, PictureDetails } from './pictures';

type ApiResponse<T> = {
  data: T,
};

export type AuthResponse = ApiResponse<{
  auth: boolean,
  token: string,
}>;

export type ImagesResponse = ApiResponse<{
  hasMore: boolean,
  page: number,
  pictures: Array<Picture>,
}>;

export type ImageDetailsResponse = ApiResponse<PictureDetails>;
