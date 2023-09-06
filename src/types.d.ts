import { TODO_FILTERS } from "./const";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

//UTILITY TYPES
export type TodoId = Pick<Todo, "id">;
export type TodoTitle = Pick<Todo, "title">;

//extraemos el valor de las key y la tranformamos en tipos
export type FiltersValues = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
