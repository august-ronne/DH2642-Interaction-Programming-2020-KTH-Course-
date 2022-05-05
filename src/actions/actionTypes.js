/**
 * TMDb API action types
 */
export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export const SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE";
export const SEARCH_GENRES_SUCCESS = "SEARCH_GENRES_SUCCESS";
export const SEARCH_GENRES_FAILURE = "SEARCH_GENRES_FAILURE";

export const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
export const GET_MOVIE_FAILURE = "GET_MOVIE_FAILURE";
export const PROMISE_FAILURE = 'PROMISE_FAILURE';
export const GET_CREDITS_SUCCESS = 'GET_CREDITS_SUCCESS';
export const GET_POPULAR_SUCCESS = 'GET_POPULAR_SUCCESS';
export const GET_UPCOMING_SUCCESS = 'GET_UPCOMING_SUCCESS';
export const GET_LATEST_SUCCESS = 'GET_LATEST_SUCCESS';


/**
 * Firebase Firestore (database) action types
 */
export const USER_MOVIES_LIST_REQUEST = "USER_MOVIES_LIST_REQUEST";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const GET_LIST_FAILURE = "GET_LIST_FAILURE";
export const HAS_USER_RATED_CURRENT_MOVIE = "HAS_USER_RATED_CURRENT_MOVIE";


 /**
  * Firebase Auth action types
  */
 export const AUTH_REQUEST = "AUTH_REQUEST";
 export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
 export const SIGNUP_ERROR = "SIGNUP_ERROR";
 export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
 export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
 export const AUTH_FAILURE = "AUTH_FAILURE";


 export const SIGNIN_SUCCESS = "LOGIN_SUCCESS";
 export const SIGNOUT_SUCCESS = "LOGOUT_SUCCESS";
