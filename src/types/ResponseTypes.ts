export interface ReviewResponseDataType {
  HttpStatus: string;
  code: number;
  message: string;
  data: ReviewListDataType;
}

export interface ReviewListDataType {
  totalCnt: number;
  page: number;
  isLastPage: boolean;
  reviewData: ReviewDataType[];
}

export interface ReviewDataType {
  reviewId: number;
  rating: number;
  reviewLikeCount: number;
  reviewer: string;
  reviewDate: string;
  reviewrSize: string;
  reviewTitle: string;
  reviewContent: string;
  productOption: string;
  reviewImages: {
    reviewImageId: number;
    reviewImageUrl: string;
    reviewImageName: string;
  }[];
  reviewitems: {
    id: number;
    value: string;
  }[];
}

export interface CommonResType {
  status: string;
  message: string;
  data: UserData;
}

export interface UserData {
  id: string;
  accessToken: string;
  name: string;
}

export interface TopCategoryType {
  topCategoryCode: string;
  topCategoryName: string;
}

export interface MiddleCategoryType {
  topCategoryCode: string;
  middleCategoryCode: string;
  middleCategoryName: string;
}

export interface BottomCategoryType {
  middleCategoryCode: string;
  bottomCategoryCode: string;
  bottomCategoryName: string;
}

export interface SubCategoryType {
  bottomCategoryCode: string;
  subCategoryCode: string;
  subCategoryName: string;
}
