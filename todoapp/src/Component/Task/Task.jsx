import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { edittask, editdon } from "../../Actions";
import EditTask from "../EditTask/EditTask";

export default function Task({ toDo, index }) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);
    const handleClose = () => setShow(false);
    const handleSow = (e) => {
        setShow(true);
        setId(e);
    };
    const [taskedit, setTaskedit] = useState("");
    function task(e) {
        setTaskedit(e.target.value);
    }
    function handlechange(input) {
        dispatch(editdon(input));
    }
    function SubmitChange() {
        dispatch(edittask(id, taskedit));
        setShow(false);
    }
    return (
        <>
            <div
                style={{
                    display: "flex",
                    height: "80px",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        height: "80px",
                        width: "80px",
                        backgroundColor: "#1dd2af",
                        color: "#ffffff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <h1>{Number(index) + 1}</h1>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between ",
                        padding: "5px",
                        alignItems: "center",
                        width: "574px",
                    }}
                >
                    <p>{toDo.task}</p>
                    <div>
                        <button
                            style={{
                                backgroundColor: "#4CAF50",
                                border: "none",
                                color: "white",
                                padding: "15px 32px",
                                textAlign: "center",
                                textDecoration: "none",
                                display: "inline-block",
                                fontSize: "16px",
                                marginRight: "5px",
                            }}
                            onClick={(e) => handlechange(toDo.id)}
                        >
                            {toDo.isDone ? "don" : "undon"}
                        </button>
                        <button
                            style={{
                                backgroundColor: "#4CAF50",
                                border: "none",
                                color: "white",
                                padding: "15px 32px",
                                textAlign: "center",
                                textDecoration: "none",
                                display: "inline-block",
                                fontSize: "16px",
                            }}
                            onClick={(e) => handleSow(toDo.id)}
                        >
                            edit
                        </button>
                    </div>
                </div>
            </div>
            <EditTask
                show={show}
                handleClose={handleClose}
                task={task}
                SubmitChange={SubmitChange}
            />
            <hr
                style={{
                    backgroundColor: "#ececec",
                    height: "2px",
                    border: "none",
                    margin: "0px",
                }}
            />
        </>
    );
}
