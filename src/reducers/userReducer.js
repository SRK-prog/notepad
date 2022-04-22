const user = { user: false };

export default function userReducer(state = user, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...action.payload };
    default:
      return state;
  }
}
