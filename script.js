// RTK = Redux toolkit
const RTK = window.RTK;

//   Creating the slice
const counterSlice = RTK.createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

//   Destructuring actions
const { increment, decrement } = counterSlice.actions;

//   Create store
const store = RTK.configureStore({ reducer: counterSlice.reducer });
//   Create dynamic variable for value
const valueEl = document.getElementById("value");

//   Create render function
function render() {
  //   store state will be string value
  valueEl.innerHTML = store.getState().toString();
}

render();

//   Create subscribing for rendering the state
store.subscribe(render);

//   Increment addEventListener function
document.getElementById("increment").addEventListener("click", function () {
  store.dispatch(increment());
});
//   Decrement addEventListener function
document.getElementById("decrement").addEventListener("click", function () {
  if (store.getState() > 0) {
    store.dispatch(decrement());
  }
});
//  Increment of an odd number
document
  .getElementById("incrementIfOdd")
  .addEventListener("click", function () {
    if (store.getState() % 2 !== 0) {
      store.dispatch(increment());
    }
  });
//  Increment async number
document
  .getElementById("incrementAsync")
  .addEventListener("click", function () {
    setTimeout(function () {
      store.dispatch(increment());
    }, 1000);
  });
