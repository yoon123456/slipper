export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  address: Scalars['String'];
  category: Scalars['String'];
  contents: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['String']>;
  groupCode?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images?: Maybe<Array<IBoardImage>>;
  lat: Scalars['String'];
  likeCount: Scalars['Int'];
  lng: Scalars['String'];
  nickname: Scalars['String'];
  place: Scalars['String'];
  placePhone?: Maybe<Scalars['String']>;
  placeUrl?: Maybe<Scalars['String']>;
  score: Scalars['Int'];
  startDate?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: IJoin;
};

export type IBoardImage = {
  __typename?: 'BoardImage';
  id: Scalars['String'];
  imageUrl: Scalars['String'];
};

export type IBoardLike = {
  __typename?: 'BoardLike';
  board: IBoard;
  createAt: Scalars['DateTime'];
  isLike: Scalars['Boolean'];
  join: IJoin;
};

export type IBusinessBoard = {
  __typename?: 'BusinessBoard';
  address: Scalars['String'];
  category: Scalars['String'];
  contents: Scalars['String'];
  createAt?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images?: Maybe<Array<IBusinessBoardImage>>;
  lat: Scalars['String'];
  likeCount: Scalars['Int'];
  lng: Scalars['String'];
  nickname: Scalars['String'];
  place: Scalars['String'];
  score: Scalars['Int'];
  startDate?: Maybe<Scalars['String']>;
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  updateAt?: Maybe<Scalars['DateTime']>;
  user: IJoin;
};

export type IBusinessBoardImage = {
  __typename?: 'BusinessBoardImage';
  businessImageUrl: Scalars['String'];
  id: Scalars['String'];
};

export type IComment = {
  __typename?: 'Comment';
  board: IBoard;
  contents?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  subComment?: Maybe<Array<ISubComment>>;
};

export type ICreateBoardInput = {
  address: Scalars['String'];
  category: Scalars['String'];
  contents: Scalars['String'];
  endDate?: InputMaybe<Scalars['String']>;
  groupCode?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  lat: Scalars['String'];
  lng: Scalars['String'];
  place: Scalars['String'];
  placePhone?: InputMaybe<Scalars['String']>;
  placeUrl?: InputMaybe<Scalars['String']>;
  score: Scalars['Int'];
  startDate?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ICreateBusinessBoardInput = {
  address: Scalars['String'];
  category: Scalars['String'];
  contents: Scalars['String'];
  endDate?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  lat: Scalars['String'];
  lng: Scalars['String'];
  place: Scalars['String'];
  score: Scalars['Int'];
  startDate?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ICreateUserInput = {
  businessImageUrl?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  imageUrl?: InputMaybe<Scalars['String']>;
  introduce?: InputMaybe<Scalars['String']>;
  nickname: Scalars['String'];
  phone: Scalars['String'];
  pw: Scalars['String'];
};

export type IJoin = {
  __typename?: 'Join';
  businessImageUrl?: Maybe<Scalars['String']>;
  createAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  introduce?: Maybe<Scalars['String']>;
  likeList: Scalars['Int'];
  nickname: Scalars['String'];
  payment?: Maybe<Array<IPayment>>;
  phone: Scalars['String'];
  role: IRole;
  subEnd?: Maybe<Scalars['DateTime']>;
  subStart?: Maybe<Scalars['DateTime']>;
  subType?: Maybe<Scalars['String']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  TEST_createBoard: IBoard;
  TEST_payment: Scalars['String'];
  clickLike: IBoardLike;
  createBoard: IBoard;
  createBusinessBoard: IBusinessBoard;
  createComment: Scalars['JSONObject'];
  createPayment: IPayment;
  createSubComment: Scalars['JSONObject'];
  createUser: IJoin;
  deleteAdiminBusinessBoard: Scalars['String'];
  deleteAdminUserBoard: Scalars['String'];
  deleteAdminUserComment: Scalars['String'];
  deleteAdminUserSubComment: Scalars['String'];
  deleteBoard: Scalars['String'];
  deleteBusinessBoard: Scalars['Boolean'];
  deleteComment: Scalars['String'];
  deleteSubComment: Scalars['String'];
  deleteUser: Scalars['Boolean'];
  getToken: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  proofToken: Scalars['String'];
  refundPayment: IPayment;
  restoreAccessToken: Scalars['String'];
  searchUserEmail: IJoin;
  updateBoard: IBoard;
  updateBusinessBoard: IBusinessBoard;
  updateComment: Scalars['String'];
  updatePayment: Scalars['String'];
  updateSubComment: Scalars['String'];
  updateUser: IJoin;
  updateUserPw: Scalars['String'];
  uploadBoardImage: Array<Scalars['String']>;
  uploadBusinessImage: Array<Scalars['String']>;
  uploadProfileImage: Array<Scalars['String']>;
  userGetToken: Scalars['String'];
};


export type IMutationTest_CreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
  email: Scalars['String'];
};


export type IMutationTest_PaymentArgs = {
  impUid: Scalars['String'];
  paymentAmount: Scalars['Float'];
  subEnd: Scalars['DateTime'];
  subStart: Scalars['DateTime'];
  userId: Scalars['String'];
};


export type IMutationClickLikeArgs = {
  boardId: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateBusinessBoardArgs = {
  createBusinessBoardInput: ICreateBusinessBoardInput;
};


export type IMutationCreateCommentArgs = {
  boardId: Scalars['String'];
  content: Scalars['String'];
};


export type IMutationCreatePaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
};


export type IMutationCreateSubCommentArgs = {
  commentId: Scalars['String'];
  content: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteAdiminBusinessBoardArgs = {
  businessBoardId: Scalars['String'];
};


export type IMutationDeleteAdminUserBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteAdminUserCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteAdminUserSubCommentArgs = {
  subCommentId: Scalars['String'];
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteBusinessBoardArgs = {
  businessBoardId: Scalars['String'];
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteSubCommentArgs = {
  subCommentId: Scalars['String'];
};


export type IMutationGetTokenArgs = {
  phone: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  pw: Scalars['String'];
};


export type IMutationProofTokenArgs = {
  mytoken: Scalars['String'];
  phone: Scalars['String'];
};


export type IMutationRefundPaymentArgs = {
  impUid: Scalars['String'];
};


export type IMutationSearchUserEmailArgs = {
  phone: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateBusinessBoardArgs = {
  businessBoardId: Scalars['String'];
  updateBusinessBoardInput: IUpdateBusinessBoardInput;
};


export type IMutationUpdateCommentArgs = {
  commentId: Scalars['String'];
  content: Scalars['String'];
};


export type IMutationUpdatePaymentArgs = {
  userId: Scalars['String'];
};


export type IMutationUpdateSubCommentArgs = {
  content: Scalars['String'];
  subCommentId: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserSaveInput;
};


export type IMutationUpdateUserPwArgs = {
  email: Scalars['String'];
  pw: Scalars['String'];
};


export type IMutationUploadBoardImageArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUploadBusinessImageArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUploadProfileImageArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUserGetTokenArgs = {
  phone: Scalars['String'];
};

export enum IPayment_Status_Enum {
  Day7 = 'DAY7',
  Day30 = 'DAY30',
  Day90 = 'DAY90'
}

export type IPayment = {
  __typename?: 'Payment';
  id: Scalars['String'];
  impUid: Scalars['String'];
  paymentAmount: Scalars['Int'];
  paymentStatus: Scalars['String'];
  subEnd: Scalars['DateTime'];
  subRefund?: Maybe<Scalars['DateTime']>;
  subStart: Scalars['DateTime'];
  subType: IPayment_Status_Enum;
  user?: Maybe<IJoin>;
};

export type IQuery = {
  __typename?: 'Query';
  TEST_API: Scalars['String'];
  TEST_fetchBoards: Array<IBoard>;
  TEST_fetchBoardsPage: Array<Scalars['JSONObject']>;
  TEST_fetchUser: IJoin;
  fetchAllUser: Array<IJoin>;
  fetchBoard: Scalars['JSONObject'];
  fetchBoardLikeCount: Scalars['Int'];
  fetchBoardsPage: Array<Scalars['JSONObject']>;
  fetchBusinessBoard: IBusinessBoard;
  fetchBusinessBoards: Array<IBusinessBoard>;
  fetchBusinessBoardsPage: Array<Scalars['JSONObject']>;
  fetchComments: Array<IComment>;
  fetchLikeBoards: Array<IBoardLike>;
  fetchPayments: Array<IPayment>;
  fetchSubComment: Array<ISubComment>;
  fetchUser: IJoin;
  fetchUserBoards: Array<IBoard>;
  fetchUserLike: IBoardLike;
  fetchUsers: Array<IJoin>;
  likeBoardsArray: Array<IBoard>;
};


export type IQueryTest_FetchBoardsPageArgs = {
  category?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryTest_FetchUserArgs = {
  email: Scalars['String'];
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardLikeCountArgs = {
  boardId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchBoardsPageArgs = {
  category?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sortType?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchBusinessBoardArgs = {
  businessBoardId: Scalars['String'];
};


export type IQueryFetchBusinessBoardsPageArgs = {
  category?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sortType?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchCommentsArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchLikeBoardsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchSubCommentArgs = {
  commentId: Scalars['String'];
};


export type IQueryFetchUserBoardsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchUserLikeArgs = {
  boardId: Scalars['String'];
};


export type IQueryLikeBoardsArrayArgs = {
  page?: InputMaybe<Scalars['Int']>;
};

export enum IRole {
  Admin = 'ADMIN',
  Business = 'BUSINESS',
  User = 'USER'
}

export type ISubComment = {
  __typename?: 'SubComment';
  comment: IComment;
  contents?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
};

export type IUpdateBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  groupCode?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  lat?: InputMaybe<Scalars['String']>;
  lng?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  placePhone?: InputMaybe<Scalars['String']>;
  placeUrl?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserSaveInput = {
  imageUrl?: InputMaybe<Scalars['String']>;
  introduce?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
};

export type IUpdateBusinessBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  lat?: InputMaybe<Scalars['String']>;
  lng?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};
