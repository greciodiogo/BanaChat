import { AUTH, LOGOUT } from "../constants/actiontypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      console.log(action?.data);
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};
export default authReducer;
