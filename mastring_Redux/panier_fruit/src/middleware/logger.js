const logger = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  console.log("Dispatching action type:", action.type);
  
  const result = next(action);
  if (action.type === "ADD_FRUIT") {
    const newState = store.getState().fruits.join(" - ");

    console.log("New state:", newState);

    // Save the new state to localStorage
    localStorage.setItem("fruits", JSON.stringify(store.getState().fruits));

    console.log("State saved to localStorage.");
  }
  return result;
};

export default logger;

