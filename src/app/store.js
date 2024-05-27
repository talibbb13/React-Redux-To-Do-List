import { configureStore } from "@reduxjs/toolkit"
// #1 toDoReducer src?
import toDoReducer from "../features/toDo/toDoSlice"

export const store = configureStore({
    reducer: toDoReducer
})
