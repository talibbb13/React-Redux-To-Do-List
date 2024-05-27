import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  toDos: [{ id: nanoid(), text: "Default To-Do-List Item" }],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const toDo = {
        id: nanoid(),
        text: action.payload,
      };
      state.toDos.push(toDo);
    },
    delToDo: (state, action) => {
      console.log(state.toDos);
      state.toDos = state.toDos.filter((eachToDo) => {
        return eachToDo.id !== action.payload;
      });
    },
    setToDos: (state, action) => {
      state.toDos = action.payload;
    },
  },
});

export const { addToDo, delToDo, setToDos } = toDoSlice.actions
export default toDoSlice.reducer

