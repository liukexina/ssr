const defaultState = {
  list: [],
  userInfo: {},
};

export default (state = defaultState, action) => {
  console.log("reducers - action", action);
  switch (action.type) {
    case "CHANGE_USER_LIST":
      return {
        ...state,
        list: action.list,
      };
    case "CHANGE_USER_INFO":
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
};

