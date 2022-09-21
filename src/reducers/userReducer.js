const data =
  localStorage.getItem("balance-notes") != null
    ? JSON.parse(localStorage.getItem("balance-notes"))
    : { user: false };

export default function userReducer(state = data, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...action.payload };
    default:
      return state;
  }
}
