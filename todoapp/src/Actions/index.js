import { ADD_TASK, EDIT_TASK, EDIT_DON } from "../Constants/action-types";
export const addtask = (payload) => {
    return {
        type: ADD_TASK,
        payload: payload,
    };
};
export const edittask = (idedit, payload) => {
    return {
        type: EDIT_TASK,
        idedit: idedit,
        payload: payload,
    };
};
export const editdon = (payload) => {
    return {
        type: EDIT_DON,
        payload: payload,
    };
};
