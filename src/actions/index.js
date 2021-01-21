import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  // instead of
  // return {
  //   type: 'FETCH_POSTS',
  //   payload: promise
  // };
  dispatch({type: ' FETCH_POSTS', payload: response })
};
