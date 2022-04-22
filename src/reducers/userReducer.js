const data =
  localStorage.getItem("user") != null
    ? JSON.parse(localStorage.getItem("user"))
    : { user: false };

export default function userReducer(state = data, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...action.payload };
    default:
      return state;
  }
}
