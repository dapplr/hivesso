import axios from 'axios';

const api = {
  get: ({url, config = {}}) => {
    return axios.get.bind(this, url, config);
  },
  post: ({url, config = {}, body}) => {
    return axios.post.bind(this, url, body, config);
  },
  dispatchApiRequest: async ({ api, dispatch, actions=[],}) => {
    const res = await api.call();
    if (res.status === 200) {
      actions[1] && dispatch({type: actions[1], payload: res.data});
    } else {
      actions[2] && dispatch({type: actions[2], payload: res.data});
    }
  },
}

export default api;