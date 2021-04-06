import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../../Actions";
export default function AddTask() {
    const [newTask, useNewTask] = useState("");
    const dispatch = useDispatch();
    function NewTask(input) {
        useNewTask(input);
    }
    function SubmitTask() {
        dispatch(addtask(newTask));
        useNewTask("");
    }
    return (
        <div className="AddTask">
            <input
                type="text"
                style={{
                    backgroundColor: "#313e4f",
                    height: "74px",
                    marginLeft: "2px",
                    color: "#a4abb2",
                    width: "572px",
                    border: "none",
                    fontSize: "50px",
                }}
                onChange={(e) => NewTask(e.target.value)}
                value={newTask}
            />
            <button
                style={{
                    backgroundColor: "#1dd2af",
                    border: "none",
                    color: "white",
                    fontSize: "60px",
                    width: "80px",
                    height: "80px",
                    cursor: "pointer",
                }}
                onClick={SubmitTask}
            >
                +
            </button>
        </div>
    );
}
