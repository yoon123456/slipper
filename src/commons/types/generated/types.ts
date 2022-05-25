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
  comment?: Maybe<Array<IComment>>;
  contents: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images?: Maybe<Array<IBoardImage>>;
  lat: Scalars['String'];
  likeCount: Scalars['Int'];
  lng: Scalars['String'];
  nickname: Scalars['String'];
  place: Scalars['String'];
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

export type IComment = {
  __typename?: 'Comment';
  board: IBoard;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
};

export type ICreateBoardInput = {
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
  imageUrl?: Maybe<Scalars['String']>;
  introduce?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  payment?: Maybe<Array<IPayment>>;
  phone: Scalars['String'];
  role: IRole;
  subEnd?: Maybe<Scalars['String']>;
  subStart?: Maybe<Scalars['String']>;
  subType?: Maybe<Scalars['String']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  createBoard: IBoard;
  createComment: IComment;
  createPayment: IPayment;
  createUser: IJoin;
  deleteBoard: Scalars['String'];
  deleteComment: IComment;
  deletePayment: IPayment;
  getToken: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  proofToken: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  testCreateBoard: IBoard;
  updateBoard: IBoard;
  updateComment: IComment;
  updateUser: IJoin;
  uploadBoardImage: Array<Scalars['String']>;
  uploadBusinessImage: Array<Scalars['String']>;
  uploadProfileImage: Array<Scalars['String']>;
  userGetToken: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateCommentArgs = {
  boardId: Scalars['String'];
  content: Scalars['String'];
};


export type IMutationCreatePaymentArgs = {
  amount: Scalars['Float'];
  impUid: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteCommentArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeletePaymentArgs = {
  userId: Scalars['String'];
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


export type IMutationTestCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
  email: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateCommentArgs = {
  boardId: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserSaveInput;
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

export type IPayment = {
  __typename?: 'Payment';
  impUid: Scalars['String'];
};

export type IQuery = {
  __typename?: 'Query';
  deleteUser: Scalars['Boolean'];
  fetchAllUser: Array<IJoin>;
  fetchBoard: IBoard;
  fetchBoardsPage: Array<Scalars['JSONObject']>;
  fetchUser: IJoin;
  fetchUserEmail: IJoin;
  fetchUsers: Array<IJoin>;
  testAPI: Scalars['String'];
  testFetchBoards: Array<IBoard>;
  testFetchBoardsPage: Array<Scalars['JSONObject']>;
  testFetchUser: IJoin;
  updateUserPw: IJoin;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardsPageArgs = {
  category?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchUserEmailArgs = {
  phone: Scalars['String'];
};


export type IQueryTestFetchBoardsPageArgs = {
  category?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryTestFetchUserArgs = {
  email: Scalars['String'];
};


export type IQueryUpdateUserPwArgs = {
  email: Scalars['String'];
  pw: Scalars['String'];
};

export enum IRole {
  Admin = 'ADMIN',
  Business = 'BUSINESS',
  User = 'USER'
}

export type IUpdateBoardInput = {
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

export type IUpdateUserSaveInput = {
  imageUrl?: InputMaybe<Scalars['String']>;
  introduce?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
};
