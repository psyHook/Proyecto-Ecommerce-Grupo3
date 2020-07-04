import axios from 'axios';

export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR";
export const FILTER_CATEGORIES = "FILTER_CATEGORIES";
export const SHOW_CATEGORIES = "SHOW_CATEGORIES";

// Funcion creadora de la accion
export const fetchCategoriesRequest = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
};

export const setCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const fetchCategoriesError = (error) => {
  return {
    type: FETCH_CATEGORIES_ERROR,
    payload: error,
  };
};

export const filterCategories = (category, arrayProductos) => {
  return {
    type: FILTER_CATEGORIES,
    payload: arrayProductos,
  };
};

export const showCategories = (categories) => {
  return {
    type: SHOW_CATEGORIES,
    payload: categories,
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest);
    axios
      .get('http://localhost:3001/category/')
      .then((res) => {
        const categories = res.data;
        dispatch(setCategoriesSuccess(categories));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCategoriesError(errorMsg));
      });
  };
};
