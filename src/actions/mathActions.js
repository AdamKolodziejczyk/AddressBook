export const addNumber = (number) => {
  return {
    type: "ADD",
    payload: number
  };
}

export const subtractNumber = (number) => {
  return {
    type: "SUBTRACT",
    payload: number
  };
}