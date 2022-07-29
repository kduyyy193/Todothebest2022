import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Status } from "../../components/ListTodo/ListTodo";
import { v4 as uuid } from "uuid";

export interface Todo {
  id: string;
  name: string;
  date: string;
  status: Status;
}

export const statusList: Status[] = [
  // {
  //   status: "All",
  //   color: "#3B82F6",
  // },
  {
    status: "ONGOING",
    color: "#FB8C02",
  },
  {
    status: "COMPLETED",
    color: "#3DD2C2",
  },
  {
    status: "OVERDUE",
    color: "#F93E70",
  },
];

const initialState: Todo[] = [
  {
    id: uuid(),
    name: "",
    date: "",
    status: statusList[0],
  },
];

export const TodosSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    updateTodoStatus: (state, action: PayloadAction<string>) => {
      state = state.map((todo) => {
        if (todo.id === action.payload) {
          switch (todo.status.status) {
            case "ONGOING":
              todo.status = statusList[1];
              break;

            case "COMPLETED":
              todo.status = statusList[2];
              break;

            case "OVERDUE":
              todo.status = statusList[0];
              break;
            default:
              break;
          }

          return todo;
        }

        return todo;
      });
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      state.splice(state.indexOf(todo as Todo), 1);
    },
  },
});

export const { addTodos, updateTodoStatus, deleteTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
