import { ADD_TASK, EDIT_DON, EDIT_TASK } from "../Constants/action-types";

const initialState = {
    todos: [
        {
            id: Math.random(),
            task: "task 1...",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "task 2...",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "task 3...",
            isDone: true,
        },
        {
            id: Math.random(),
            task: "task 4...",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "task 5...",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "task 6...",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "task 7...",
            isDone: false,
        },
    ],
};

export default function Reducer(state = initialState, action) {
    const { type, payload, idedit } = action;
    switch (type) {
        case ADD_TASK: {
            return {
                todos: [
                    ...state.todos,
                    { id: Math.random(), task: payload, isDone: false },
                ],
            };
        }
        case EDIT_TASK: {
            return {
                todos: state.todos.map((todo) =>
                    todo.id === idedit ? { ...todo, task: payload } : todo
                ),
            };
        }
        case EDIT_DON: {
            return {
                todos: state.todos.map((todo) =>
                    todo.id === payload
                        ? { ...todo, isDone: !todo.isDone }
                        : todo
                ),
            };
        }
        default:
            return state;
    }
}
