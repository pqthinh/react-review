import { createStore } from "redux";

function search(state = { search: "" }, action) {
  switch (action.type) {
    case "INPUT":
      return (state.search = action.textSearch);
    case "CLEAR":
      return (state.search = "");
    default:
      return state;
  }
}
const store = createStore(search, ["Use Redux"]); 

export default store